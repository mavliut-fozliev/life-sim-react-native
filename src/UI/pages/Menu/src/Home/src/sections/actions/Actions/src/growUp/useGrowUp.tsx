import {activityData} from '../../../../../../../../../../../consts/places/activities/data';
import {places} from '../../../../../../../../../../../consts/places/places';
import {usePeopleConnections} from '../../../../../../../../../../../hooks/usePeopleConnections';
import {Person} from '../../../../../../../../../../../types/people';
import {UpdateByKeysParams} from '../../../../../../../../../../../types/store';
import {deepCopy, getRandomValue} from '../../../../../../../../../../../utils/common';
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

  const updateConnections = () => {
    characterStore.peopleConnections.forEach(connection => {
      const newConnection = updateRelationship(connection);
      if (newConnection) {
        updateConnection(connection.idA, connection.idB, newConnection);
      }
    });
  };

  const updateStats = (person: Person) => {
    person.age = person.age + 1;
    person.energy = 20;
    person.health = updateHealth(person);
    person.effects = imposingEffects(person);
    person.dead = kill(person);

    return person;
  };

  const makeActions = (person: Person) => {
    const districts = places[person.country][person.city] || {};
    const availablePlaces = Object.values(districts)
      .map(districtActivities => Object.values(districtActivities))
      .flat();

    const activities = availablePlaces.flatMap(p => activityData[p.type][p.level]);

    //loop starts here
    const selectedActivity = activities[0];

    const isEnough = selectedActivity.price.every(({resource, amount}) => person[resource] >= amount);

    if (isEnough) {
      selectedActivity.price.forEach(({resource, amount}) => (person[resource] = person[resource] - amount));

      selectedActivity.action.forEach(({stat, chances}) => person[stat] + getRandomValue(chances));
    }
    // ends here

    return person;
    // const doActivites = () => {
    // }
    // const doIntercations = () => {}
  };

  const savePersonUpdates = (person: Person) => {
    const getUpdateObj = (prop: keyof Person) => ({
      itemKeys: [person.id, prop],
      value: person[prop],
    });

    const propsToSave: Array<keyof Person> = ['age', 'energy', 'money', 'health', 'power', 'charm', 'effects', 'dead'];

    const params: UpdateByKeysParams = propsToSave.map(prop => getUpdateObj(prop));
    characterStore.$people.updateByKeys(params);
  };

  const peopleManipulations = () => {
    return Object.values(characterStore.people).map(person => {
      if (person.dead) {
        return;
      }
      let updatedPerson = deepCopy(person);

      updatedPerson = updateStats(updatedPerson);
      updatedPerson = makeActions(updatedPerson);

      savePersonUpdates(updatedPerson);
    });
  };

  return () => {
    addAgeToHistory();

    // player manipulations
    playerStore.$age.increase(1);
    playerStore.$energy.set(20);

    // character manipulations
    updateConnections();
    peopleManipulations();
  };
}
