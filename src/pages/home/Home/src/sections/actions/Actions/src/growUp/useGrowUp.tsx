import {usePeopleConnections} from '../../../../../../../../../features/character/hooks/usePeopleConnections';
import {Person} from '../../../../../../../../../shared/types/people';
import useCharacterStore from '../../../../../../../../../shared/store/characterStore';
import {useStoreHooks} from '../../../../../../../../../shared/store/storeHooks';
import {imposingEffects} from './src/imposingEffects';
import {kill} from './src/kill';
import {updateHealth} from './src/updateHealth';
import {getAvailableActivities, updatePersonByActivity} from '../../../../../../../../../features/places/helpers';
import {useUpdatePerson} from '../../../../../../../../../features/character/hooks/useUpdatePerson';
import {updateRelationship} from './src/updateRelationship';
import {playerId} from '../../../../../../../../../features/character/player';
import {useInteractions} from '../../../../../../../../../features/character/interactions/hooks/useInteractions';

export function useGrowUp() {
  const characterStore = useCharacterStore();
  const {addAgeToHistory} = useStoreHooks();
  const {updateConnection} = usePeopleConnections();
  const {savePerson} = useUpdatePerson();
  const {getAvailableInteractions, updateConnectionByInteraction} = useInteractions();

  const updateConnections = () => {
    characterStore.peopleConnections.forEach(connection => {
      const updated = updateRelationship(connection);
      if (updated) {
        updateConnection(connection.idA, connection.idB, connection);
      }
    });
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
    const availableInteractions = getAvailableInteractions(person, selectedPerson);
    const selectedInteraction = availableInteractions[0];
    updateConnectionByInteraction(person, selectedPerson, selectedInteraction);
  };

  const peopleManipulations = () => {
    Object.values(characterStore.people).map(person => {
      if (person.dead) {
        return;
      }

      updateStats(person);

      if (person.id !== playerId) {
        makeActions(person);
      }

      savePerson(person);
    });
  };

  return () => {
    addAgeToHistory();

    // both manipulations
    updateConnections();

    // character manipulations
    peopleManipulations();
  };
}
