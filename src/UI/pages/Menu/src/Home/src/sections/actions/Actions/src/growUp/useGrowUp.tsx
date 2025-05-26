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
  const {updateConnection} = usePeopleConnections();

  const peopleManipulation = (person: Person) => {
    const ageUpdateParams = {
      itemKeys: [person.id, 'age'],
      value: person.age + 1,
    };

    const energyUpdateParams = {
      itemKeys: [person.id, 'energy'],
      value: 20,
    };

    const healthUpdateParams = updateHealth(person); // review (or also add to player)
    const effectsUpdateParams = imposingEffects(person); // review (or also add to player)
    const deadUpdateParams = kill(person); // review (or also add to player)

    const params: UpdateByKeysParams = [
      ageUpdateParams,
      energyUpdateParams,
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

  const updateConnections = () => {
    characterStore.peopleConnections.forEach(connection => {
      const newConnection = updateRelationship(connection);
      if (newConnection) {
        updateConnection(connection.idA, connection.idB, newConnection);
      }
    });
  };

  const characterActions = (person: Person) => {
    // const doActivites = () => {
    // }
    // const doIntercations = () => {}
  };

  const charactersActions = () => {
    Object.values(characterStore.people).forEach(person => {
      if (person.dead) {
        return;
      }
      characterActions(person);
    });
  };

  return () => {
    addAgeToHistory();

    // player manipulations
    playerStore.$age.increase(1);
    playerStore.$energy.set(20);

    peopleManipulations();

    updateConnections();

    charactersActions();
  };
}
