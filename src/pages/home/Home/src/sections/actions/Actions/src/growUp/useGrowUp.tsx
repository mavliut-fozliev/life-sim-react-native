import {usePeopleConnections} from '../../../../../../../../../features/character/hooks/usePeopleConnections';
import {Person} from '../../../../../../../../../shared/types/people';
import {findMatchingKeyByMaxNumber} from '../../../../../../../../../shared/utils/common';
import useCharacterStore from '../../../../../../../../../shared/store/characterStore';
import {useStoreHooks} from '../../../../../../../../../shared/store/storeHooks';
import {imposingEffects} from './src/imposingEffects';
import {kill} from './src/kill';
import {updateHealth} from './src/updateHealth';
import {updateRelationship} from './src/updateRelationship';
import {getAvailableActivities, updatePersonByActivity} from '../../../../../../../../../features/places/helpers';
import {useUpdatePerson} from '../../../../../../../../../features/character/hooks/useUpdatePerson';
import {peopleRelationshipMap} from '../../../../../../../../../features/character/characterProps';
import {interactions} from '../../../../../../../../../features/character/interactions/interactions';
import {usePlayer} from '../../../../../../../../../features/character/hooks/usePlayer';
import {playerId} from '../../../../../../../../../features/character/player';

export function useGrowUp() {
  const player = usePlayer();
  const characterStore = useCharacterStore();
  const {addAgeToHistory} = useStoreHooks();
  const {updateConnection} = usePeopleConnections();
  const {findPersonConnection} = usePeopleConnections();
  const {savePerson} = useUpdatePerson();

  const updateConnections = () => {
    characterStore.peopleConnections.forEach(connection => {
      const newConnection = updateRelationship(connection);
      if (newConnection) {
        updateConnection(connection.idA, connection.idB, newConnection);
      }
    });
  };

  const updatePlayerStats = () => {
    characterStore.$people.updateByKeys([
      {itemKeys: [playerId, 'age'], value: player.age + 1},
      {itemKeys: [playerId, 'energy'], value: 20},
    ]);
  };

  const updateStats = (person: Person) => {
    person.age = person.age + 1;
    person.energy = 20;
    person.health = updateHealth(person);
    person.effects = imposingEffects(person);
    person.dead = kill(person);
  };

  const makeActions = (person: Person) => {
    // activities
    const activities = getAvailableActivities(person);

    // loop starts here
    const selectedActivity = activities[0];
    updatePersonByActivity(selectedActivity, person);
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
  };

  const peopleManipulations = () => {
    return Object.values(characterStore.people).map(person => {
      if (person.dead) {
        return;
      }
      // let updatedPerson = deepCopy(person);

      updateStats(person);
      makeActions(person);

      savePerson(person);
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
