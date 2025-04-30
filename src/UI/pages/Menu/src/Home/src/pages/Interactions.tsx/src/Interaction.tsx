import React from 'react';
import SectionButton from '../../../../../../../../components/SectionButton/SectionButton';
import {PeopleInteraction, Person} from '../../../../../../../../../types/people';
import {getRandomValue} from '../../../../../../../../../utils/common';
import useCharacterStore from '../../../../../store/characterStore';

type InteractionProps = {
  interaction: PeopleInteraction;
  person: Person;
};

function Interaction({interaction, person}: InteractionProps) {
  const characterStore = useCharacterStore();

  const handlePress = () => {
    const oneTimeImpact = getRandomValue(interaction.oneTimeImpact);
    const situationImpact = getRandomValue(interaction.situationImpact);

    const params = [
      {itemKeys: [person.id, 'relationship'], value: person.relationship + oneTimeImpact},
      {itemKeys: [person.id, 'situation'], value: situationImpact},
    ];

    characterStore.$people.updateByKeys(params);
  };

  return <SectionButton label={interaction.label} onPress={handlePress} />;
}

export default Interaction;
