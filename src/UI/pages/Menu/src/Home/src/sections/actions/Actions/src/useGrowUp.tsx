import {PeopleRole, peopleSituationImpact} from '../../../../../../../../../../consts/character/characterProps';
import {Person} from '../../../../../../../../../../types/people';
import {UpdateByKeysParams} from '../../../../../../../../../../types/store';
import useCharacterStore from '../../../../../../store/characterStore';
import usePlayerStore from '../../../../../../store/playerStore';
import {useStoreHooks} from '../../../../../../store/storeHooks';

export function useGrowUp() {
  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();
  const {addAgeToHistory} = useStoreHooks();

  const peopleManipulation = (person: Person) => {
    let params: UpdateByKeysParams = [];

    const ageUpdateParams = {
      itemKeys: [person.id, 'age'],
      value: person.age + 1,
    };

    params = [ageUpdateParams];

    if (person.role !== PeopleRole.Stranger) {
      const initialImpact = -2;
      const newRelationship = person.relationship + initialImpact;

      const relationshipUpdateParams = {
        itemKeys: [person.id, 'relationship'],
        value: newRelationship,
        min: 0,
        max: 100,
      };

      const performedActionsUpdateParams = {
        itemKeys: [person.id, 'performedActions'],
        value: 0,
      };

      params = [...params, relationshipUpdateParams, performedActionsUpdateParams];

      if (person.situation && person.situationDuration) {
        relationshipUpdateParams.value = newRelationship + peopleSituationImpact[person.situation];

        const situationDurationUpdateParams = {
          itemKeys: [person.id, 'situationDuration'],
          value: person.situationDuration - 1,
        };
        params = [...params, situationDurationUpdateParams];

        if (person.situationDuration === 1) {
          const situationUpdateParams = {
            itemKeys: [person.id, 'situation'],
            value: undefined,
          };
          params = [...params, situationUpdateParams];
        }
      }
    }

    characterStore.$people.updateByKeys(params);
  };

  const peopleManipulations = () => {
    Object.values(characterStore.people).forEach(person => {
      peopleManipulation(person);
    });
  };

  return () => {
    addAgeToHistory();
    playerStore.$age.increase(1);
    playerStore.$energy.set(20);
    peopleManipulations();
  };
}
