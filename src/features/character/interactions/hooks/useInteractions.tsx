import {PeopleInteraction, Person} from '../../../../shared/types/people';
import {findMatchingKeyByMaxNumber, getRandomValue} from '../../../../shared/utils/common';
import {peopleRelationshipMap, peopleSituationImpact} from '../../characterProps';
import {usePeopleConnections} from '../../hooks/usePeopleConnections';
import {interactions} from '../interactions';
import {specialEffects} from '../specialEffects';

export function useInteractions() {
  const {findPersonConnection, updateConnection} = usePeopleConnections();

  const getAvailableInteractions = (person: Person, selectedPerson: Person) => {
    if (person.dead) {
      return [];
    }

    const connection = findPersonConnection(person.id, selectedPerson.id);
    const relationshipStage = findMatchingKeyByMaxNumber(peopleRelationshipMap, connection.relationship);

    if (!relationshipStage) {
      return [];
    }

    const allInteractions = interactions[person.gender][connection.role] || [];
    return allInteractions.filter(i => i.conditions.includes(relationshipStage));
  };

  const updateConnectionByInteraction = (person: Person, selectedPerson: Person, interaction: PeopleInteraction) => {
    const connection = findPersonConnection(person.id, selectedPerson.id);

    //oneTimeImpact
    const oneTimeImpact = getRandomValue(interaction.oneTimeImpact);

    connection.relationship = connection.relationship + oneTimeImpact;
    connection.performedActions = (connection.performedActions || 0) + 1;

    //specialEffect
    interaction.specialEffects?.forEach(effect => {
      const specialEffect = specialEffects[effect];
      if (specialEffect) {
        (connection as any)[specialEffect.key] = specialEffect.value;
      }
    });

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

    updateConnection(person.id, selectedPerson.id, connection);
  };

  return {getAvailableInteractions, updateConnectionByInteraction};
}
