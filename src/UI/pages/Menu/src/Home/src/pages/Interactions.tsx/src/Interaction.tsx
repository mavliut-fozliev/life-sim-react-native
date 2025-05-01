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

    let params: UpdateByKeysParams = [relationshipUpdateParams, performedActionsUpdateParams];

    const oldSituationImpact = person.situation ? peopleSituationImpact[person.situation] : 0;
    const newSituation = getRandomValue(interaction.situationImpact);
    const newSituationImpact = newSituation ? peopleSituationImpact[newSituation] : 0;

    if (Math.abs(newSituationImpact) > Math.abs(oldSituationImpact)) {
      const situationUpdateParams = {itemKeys: [person.id, 'situation'], value: newSituation};
      const situationDurationUpdateParams = {itemKeys: [person.id, 'situationDuration'], value: 3};
      params = [...params, situationUpdateParams, situationDurationUpdateParams];
    }

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

  return <SectionButton label={interaction.label} onPress={handlePress} disabled={isDisabled()} />;
}

export default Interaction;
