import {peopleRelationshipMap} from '../../../../../../../../../shared/constants/character/characterProps';
import {interactions} from '../../../../../../../../../shared/constants/character/interactions/interactions';
import {activityData} from '../../../../../../../../../shared/constants/places/activities/data';
import {places} from '../../../../../../../../../shared/constants/places/places';
import {usePeopleConnections} from '../../../../../../../../../shared/hooks/usePeopleConnections';
import {Person} from '../../../../../../../../../shared/types/people';
import {UpdateByKeysParams} from '../../../../../../../../../shared/types/store';
import {deepCopy, findMatchingKeyByMaxNumber, getRandomValue} from '../../../../../../../../../shared/utils/common';
import useCharacterStore from '../../../../../../../../../shared/store/characterStore';
import usePlayerStore from '../../../../../../../../../shared/store/playerStore';
import {useStoreHooks} from '../../../../../../../../../shared/store/storeHooks';
import {imposingEffects} from './src/imposingEffects';
import {kill} from './src/kill';
import {updateHealth} from './src/updateHealth';
import {updateRelationship} from './src/updateRelationship';

export function useGrowUp() {
  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();
  const {addAgeToHistory} = useStoreHooks();
  const {updateConnection} = usePeopleConnections();
  const {findPersonConnection} = usePeopleConnections();

  const updateConnections = () => {
    characterStore.peopleConnections.forEach(connection => {
      const newConnection = updateRelationship(connection);
      if (newConnection) {
        updateConnection(connection.idA, connection.idB, newConnection);
      }
    });
  };

  const updatePlayerStats = () => {
    playerStore.$age.increase(1);
    playerStore.$energy.set(20);
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
    const getActivities = () => {
      const districts = places[person.country][person.city] || {};
      const availablePlaces = Object.values(districts)
        .map(districtActivities => Object.values(districtActivities))
        .flat();

      return availablePlaces.flatMap(p => activityData[p.type][p.level]);
    };

    // activities
    const activities = getActivities();

    // loop starts here
    const selectedActivity = activities[0];

    const isEnough = selectedActivity.price.every(({resource, amount}) => person[resource] >= amount);

    if (isEnough) {
      selectedActivity.price.forEach(({resource, amount}) => (person[resource] = person[resource] - amount));

      selectedActivity.action.forEach(({stat, chances}) => person[stat] + getRandomValue(chances));
    }
    // ends here

    // interactions
    const people = Object.values(characterStore.people);

    // loop starts here
    const selectedPerson = people[0]; // avoid to select the same person

    const connection = findPersonConnection(person.id, selectedPerson.id);
    const relationshipStage = findMatchingKeyByMaxNumber(peopleRelationshipMap, connection.relationship);
    const allInteractions = interactions[person.gender][connection.role] || [];

    const getAvailableInteractions = () => {
      if (person.dead || !relationshipStage) {
        return [];
      }
      return allInteractions.filter(i => i.conditions.includes(relationshipStage));
    };

    const availableInteractions = getAvailableInteractions();

    const selectedInteraction = availableInteractions[0];

    console.log(person, selectedPerson, selectedInteraction);

    return person;
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

    // both manipulations
    updateConnections();

    // player manipulations
    updatePlayerStats();

    // character manipulations
    peopleManipulations();
  };
}
