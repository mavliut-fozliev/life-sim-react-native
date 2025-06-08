import React from 'react';
import {PeopleInteraction, Person} from '../../../../../shared/types/people';
import {useNavigate} from '../../../../../shared/hooks/useNavigate';
import {Navigation} from '../../../../../shared/types/navigation';
import {useLocalizeText} from '../../../../../shared/locales/useLocalizeText';
import useGameStore from '../../../../../shared/store/gameStore';
import {Icon} from '../../../../../shared/icons/icons';
import {useStoreHooks} from '../../../../../shared/store/storeHooks';
import {usePeopleConnections} from '../../../../../features/character/hooks/usePeopleConnections';
import {useIcon} from '../../../../../shared/icons/useIcon';
import SectionButton from '../../../../../shared/ui/components/SectionButton/SectionButton';
import {playerId} from '../../../../../features/character/player';
import {usePlayer} from '../../../../../features/character/hooks/usePlayer';
import useCharacterStore from '../../../../../shared/store/characterStore';
import {useInteractions} from '../../../../../features/character/interactions/hooks/useInteractions';

type InteractionProps = {
  interaction: PeopleInteraction;
  person: Person;
  navigation: Navigation;
};

function Interaction({interaction, person, navigation}: InteractionProps) {
  const player = usePlayer();
  const characterStore = useCharacterStore();
  const gameStore = useGameStore();
  const {addItemToHistory} = useStoreHooks();

  const navigate = useNavigate(navigation);
  const {translate} = useLocalizeText();
  const {findPersonConnection} = usePeopleConnections();
  const {updateConnectionByInteraction} = useInteractions();

  const connection = findPersonConnection(playerId, person.id);

  const handlePress = () => {
    updateConnectionByInteraction(player, person, interaction);

    // set popup content and history
    const content = interaction.getDescriptions({
      health: person.health,
      name: person.name,
    });
    gameStore.$popUpContent.set({
      content,
    });
    addItemToHistory(content);

    characterStore.$people.updateByKeys([{itemKeys: [playerId, 'energy'], value: player.energy - 1}]);
    navigate.backToHome();
  };

  const isDisabled = () => {
    if (player.energy < 1) {
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
