import React from 'react';
import SectionButton from '../../../../../../../../../components/SectionButton/SectionButton';
import {PeopleInteraction, Person} from '../../../../../../../../../../types/people';
import {getRandomValue} from '../../../../../../../../../../utils/common';
import useCharacterStore from '../../../../../../store/characterStore';
import usePlayerStore from '../../../../../../store/playerStore';
import {useNavigate} from '../../../../../../../../../../hooks/useNavigate';
import {Navigation} from '../../../../../../../../../../types/navigation';
import {peopleSituationImpact} from '../../../../../../../../../../consts/character/characterProps';
import {UpdateByKeysParams} from '../../../../../../../../../../types/store';
import {useLocalizeText} from '../../../../../../../../../../locales/useLocalizeText';
import {useSpecialEffects} from './src/useSpecialEffects';
import useGameStore from '../../../../../../store/gameStore';
import {Icon} from '../../../../../../../../../../consts/icons';
import {useIcon} from '../../../../../../../../../../icons/useIcon';
import {useStoreHooks} from '../../../../../../store/storeHooks';

type InteractionProps = {
  interaction: PeopleInteraction;
  person: Person;
  navigation: Navigation;
};

function Interaction({interaction, person, navigation}: InteractionProps) {
  const characterStore = useCharacterStore();
  const playerStore = usePlayerStore();
  const gameStore = useGameStore();
  const {addItemToHistory} = useStoreHooks();

  const navigate = useNavigate(navigation);
  const {translate} = useLocalizeText();

  let params: UpdateByKeysParams = [];
  const specialEffects = useSpecialEffects(interaction, person);

  const handlePress = () => {
    //oneTimeImpact
    const oneTimeImpact = getRandomValue(interaction.oneTimeImpact);

    const relationshipUpdateParams = {
      itemKeys: [person.id, 'relationship'],
      value: person.relationship + oneTimeImpact,
      min: 0,
      max: 100,
    };

    const performedActionsUpdateParams = {
      itemKeys: [person.id, 'performedActions'],
      value: (person.performedActions || 0) + 1,
    };

    params = [...params, relationshipUpdateParams, performedActionsUpdateParams];

    //specialEffect
    const specialEffectsResult = specialEffects();
    if (specialEffectsResult?.params) {
      params = [...params, ...specialEffectsResult.params];
    }

    //situationImpact
    const oldSituationImpact = person.situation ? peopleSituationImpact[person.situation] : 0;
    const newSituation = getRandomValue(interaction.situationImpact);
    const newSituationImpact = newSituation ? peopleSituationImpact[newSituation] : 0;

    if (Math.abs(newSituationImpact) > Math.abs(oldSituationImpact)) {
      const situationUpdateParams = {itemKeys: [person.id, 'situation'], value: newSituation};

      const situationDuration = getRandomValue([
        {value: 2, chance: 50},
        {value: 3, chance: 30},
        {value: 4, chance: 20},
      ]);
      const situationDurationUpdateParams = {
        itemKeys: [person.id, 'situationDuration'],
        value: situationDuration,
      };
      params = [...params, situationUpdateParams, situationDurationUpdateParams];
    }

    // set popup content and history
    const content = interaction.getDescriptions({
      health: person.params.health,
      name: person.name,
    });
    gameStore.$popUpContent.set({
      content,
    });
    addItemToHistory(content);

    characterStore.$people.updateByKeys(params);
    playerStore.$energy.decrease(1);
    navigate.backToHome();
  };

  const isDisabled = () => {
    if (playerStore.energy < 1) {
      return true;
    }
    if (person.performedActions && person.performedActions > 2) {
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
