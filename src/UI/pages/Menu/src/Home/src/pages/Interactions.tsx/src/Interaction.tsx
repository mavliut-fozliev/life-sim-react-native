import React from 'react';
import SectionButton from '../../../../../../../../components/SectionButton/SectionButton';
import {PeopleInteraction, Person} from '../../../../../../../../../types/people';
import {getRandomValue} from '../../../../../../../../../utils/common';
import useCharacterStore from '../../../../../store/characterStore';
import usePlayerStore from '../../../../../store/playerStore';
import {useNavigate} from '../../../../../../../../../hooks/useNavigate';
import {Navigation} from '../../../../../../../../../types/navigation';

type InteractionProps = {
  interaction: PeopleInteraction;
  person: Person;
  navigation: Navigation;
};

function Interaction({interaction, person, navigation}: InteractionProps) {
  const characterStore = useCharacterStore();
  const playerStore = usePlayerStore();
  const navigate = useNavigate(navigation);

  const handlePress = () => {
    const oneTimeImpact = getRandomValue(interaction.oneTimeImpact);
    const situationImpact = getRandomValue(interaction.situationImpact);

    const params = [
      {itemKeys: [person.id, 'relationship'], value: person.relationship + oneTimeImpact},
      {itemKeys: [person.id, 'situation'], value: situationImpact},
    ];

    characterStore.$people.updateByKeys(params);
    playerStore.$energy.decrease(1);
    navigate.backToHome();
  };

  return <SectionButton label={interaction.label} onPress={handlePress} />;
}

export default Interaction;
