import {playerId} from '../../../../../../../../../../../consts/character/player';
import {usePeopleConnections} from '../../../../../../../../../../../hooks/usePeopleConnections';
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
  const {findPersonConnection, updateConnection} = usePeopleConnections();

  const peopleManipulation = (person: Person) => {
    const connectionToPlayer = findPersonConnection(person.id, playerId);

    const ageUpdateParams = {
      itemKeys: [person.id, 'age'],
      value: person.age + 1,
    };

    const newConnectionToPlayer = updateRelationship(connectionToPlayer);
    if (newConnectionToPlayer) {
      updateConnection(playerId, person.id, newConnectionToPlayer);
    }

    const healthUpdateParams = updateHealth(person); // review (or also add to player)
    const effectsUpdateParams = imposingEffects(person); // review (or also add to player)
    const deadUpdateParams = kill(person); // review (or also add to player)

    const params: UpdateByKeysParams = [ageUpdateParams, healthUpdateParams, effectsUpdateParams, deadUpdateParams];

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
