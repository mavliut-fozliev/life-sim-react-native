import {Person} from '../../../../../../../../../../../types/people';
import {UpdateByKeysParams} from '../../../../../../../../../../../types/store';
import useCharacterStore from '../../../../../../../store/characterStore';
import usePlayerStore from '../../../../../../../store/playerStore';
import {useStoreHooks} from '../../../../../../../store/storeHooks';
import {imposingEffects} from './src/imposingEffects';
import {kill} from './src/kill';
import {updateHealth} from './src/updateHealth';
import {updateRelationship} from './src/updateRelationship';

export function useGrowUp() {
  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();
  const {addAgeToHistory} = useStoreHooks();

  const peopleManipulation = (person: Person) => {
    const ageUpdateParams = {
      itemKeys: [person.id, 'age'],
      value: person.age + 1,
    };

    const relationshipUpdates = updateRelationship(person);
    const healthUpdateParams = updateHealth(person); // review
    const effectsUpdateParams = imposingEffects(person); // review
    const deadUpdateParams = kill(person); // review

    const params: UpdateByKeysParams = [
      ageUpdateParams,
      ...relationshipUpdates,
      healthUpdateParams,
      effectsUpdateParams,
      deadUpdateParams,
    ];

    characterStore.$people.updateByKeys(params);
  };

  const peopleManipulations = () => {
    Object.values(characterStore.people).forEach(person => {
      if (person.dead) {
        return;
      }
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
