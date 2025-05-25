import React from 'react';
import SectionButton from '../../../../../../../../../components/SectionButton/SectionButton';
import {PeopleInteraction, Person} from '../../../../../../../../../../types/people';
import {getRandomValue} from '../../../../../../../../../../utils/common';
import usePlayerStore from '../../../../../../store/playerStore';
import {useNavigate} from '../../../../../../../../../../hooks/useNavigate';
import {Navigation} from '../../../../../../../../../../types/navigation';
import {peopleSituationImpact} from '../../../../../../../../../../consts/character/characterProps';
import {useLocalizeText} from '../../../../../../../../../../locales/useLocalizeText';
import {useSpecialEffects} from './src/useSpecialEffects';
import useGameStore from '../../../../../../store/gameStore';
import {Icon} from '../../../../../../../../../../consts/icons';
import {useIcon} from '../../../../../../../../../../icons/useIcon';
import {useStoreHooks} from '../../../../../../store/storeHooks';
import {usePeopleConnections} from '../../../../../../../../../../hooks/usePeopleConnections';
import {playerId} from '../../../../../../../../../../consts/character/player';

type InteractionProps = {
  interaction: PeopleInteraction;
  person: Person;
  navigation: Navigation;
};

function Interaction({interaction, person, navigation}: InteractionProps) {
  const playerStore = usePlayerStore();
  const gameStore = useGameStore();
  const {addItemToHistory} = useStoreHooks();

  const navigate = useNavigate(navigation);
  const {translate} = useLocalizeText();
  const {findPersonConnection, updateConnection} = usePeopleConnections();
  const specialEffects = useSpecialEffects(interaction);

  const connection = findPersonConnection(playerId, person.id);

  const handlePress = () => {
    //oneTimeImpact
    const oneTimeImpact = getRandomValue(interaction.oneTimeImpact);

    connection.relationship = connection.relationship + oneTimeImpact;
    connection.performedActions = (connection.performedActions || 0) + 1;

    //specialEffect
    const specialEffectsResult = specialEffects();
    if (specialEffectsResult?.connectionUpdates) {
      specialEffectsResult.connectionUpdates.forEach(connectionUpdate => {
        (connection as any)[connectionUpdate.key] = connectionUpdate.value;
      });
    }

    //situationImpact
    const oldSituationImpact = connection.situation ? peopleSituationImpact[connection.situation] : 0;
    const newSituation = getRandomValue(interaction.situationImpact);
    const newSituationImpact = newSituation ? peopleSituationImpact[newSituation] : 0;

    if (Math.abs(newSituationImpact) > Math.abs(oldSituationImpact)) {
      connection.situation = newSituation;

      const situationDuration = getRandomValue([
        {value: 2, chance: 50},
        {value: 3, chance: 30},
        {value: 4, chance: 20},
      ]);
      connection.situationDuration = situationDuration;
    }

    // set popup content and history
    const content = interaction.getDescriptions({
      health: person.health,
      name: person.name,
    });
    gameStore.$popUpContent.set({
      content,
    });
    addItemToHistory(content);

    updateConnection(playerId, person.id, connection);

    playerStore.$energy.decrease(1);
    navigate.backToHome();
  };

  const isDisabled = () => {
    if (playerStore.energy < 1) {
      return true;
    }
    if (connection.performedActions && connection.performedActions > 2) {
      return true;
    }
    return false;
  };

  const icon = useIcon(interaction.icon, {size: 26});
  const energyIcon = useIcon(Icon.Energy, {size: 24});

  return (
    <SectionButton
      label={translate(interaction.label)}
      onPress={handlePress}
      disabled={isDisabled()}
      mainIcon={icon}
      icon={energyIcon}
    />
  );
}

export default Interaction;
