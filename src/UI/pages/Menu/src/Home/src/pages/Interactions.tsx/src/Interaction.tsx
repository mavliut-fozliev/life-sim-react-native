import React from 'react';
import SectionButton from '../../../../../../../../components/SectionButton/SectionButton';
import {PeopleInteraction, Person} from '../../../../../../../../../types/people';
import {getRandomValue} from '../../../../../../../../../utils/common';
import useCharacterStore from '../../../../../store/characterStore';
import usePlayerStore from '../../../../../store/playerStore';
import {useNavigate} from '../../../../../../../../../hooks/useNavigate';
import {Navigation} from '../../../../../../../../../types/navigation';
import {peopleSituationImpact} from '../../../../../../../../../consts/character/characterProps';
import {UpdateByKeysParams} from '../../../../../../../../../types/store';

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

    const params: UpdateByKeysParams = [
      {itemKeys: [person.id, 'relationship'], value: person.relationship + oneTimeImpact, min: 0, max: 100},
    ];

    const oldSituationImpact = person.situation ? peopleSituationImpact[person.situation] : 0;
    const newSituation = getRandomValue(interaction.situationImpact);
    const newSituationImpact = newSituation ? peopleSituationImpact[newSituation] : 0;

    if (Math.abs(newSituationImpact) > Math.abs(oldSituationImpact)) {
      params.push({itemKeys: [person.id, 'situation'], value: newSituation});
    }

    characterStore.$people.updateByKeys(params);
    playerStore.$energy.decrease(1);
    navigate.backToHome();
  };

  return <SectionButton label={interaction.label} onPress={handlePress} disabled={playerStore.energy < 1} />;
}

export default Interaction;
