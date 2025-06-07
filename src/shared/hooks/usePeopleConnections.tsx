import {PeopleExactRole, PeopleRole} from '../constants/character/characterProps';
import {Gender} from '../constants/gender';
import {PeopleConnection, Person} from '../types/people';
import useCharacterStore from '../store/characterStore';
import usePlayerStore from '../store/playerStore';

export function usePeopleConnections() {
  const characterStore = useCharacterStore();
  const playerStore = usePlayerStore();

  function findPersonConnection(idA: string, idB: string): PeopleConnection {
    const connection = characterStore.peopleConnections.find(
      r => (r.idA === idA && r.idB === idB) || (r.idA === idB && r.idB === idA),
    );
    if (connection) {
      return connection;
    }

    return {
      idA: idA,
      idB: idB,
      role: PeopleRole.Stranger,
      relationship: 50,
    };
  }

  function findPersonConnectionsByRole(
    id: string,
    role: PeopleRole,
  ): Array<{person: Person; connection: PeopleConnection}> {
    const connections = characterStore.peopleConnections.filter(c => c.role === role && (c.idA === id || c.idB === id));

    return connections.map(connection => {
      const personId = connection.idA !== id ? connection.idA : connection.idB;

      return {
        person: characterStore.people[personId],
        connection,
      };
    });
  }

  function findExactRoles(current?: Person) {
    const currentPerson = current || playerStore.person;

    const parentChildConnections = characterStore.peopleConnections.filter(
      c => c.role === PeopleRole.ParentChild && (c.idA === currentPerson.id || c.idB === currentPerson.id),
    );

    const exactRoles: {[key in PeopleExactRole]?: {person: Person; connection: PeopleConnection}} = {};

    parentChildConnections.forEach(connection => {
      const process = (person: Person | undefined) => {
        if (!person || person.id === currentPerson.id) {
          return;
        }

        const obj = {person, connection};

        if (person.age < currentPerson.age) {
          if (person.gender === Gender.Male) {
            exactRoles[PeopleExactRole.Son] = obj;
          } else {
            exactRoles[PeopleExactRole.Daughter] = obj;
          }
        } else {
          if (person.gender === Gender.Male) {
            exactRoles[PeopleExactRole.Father] = obj;
          } else {
            exactRoles[PeopleExactRole.Mother] = obj;
          }
        }
      };

      process(characterStore.people[connection.idA]);
      process(characterStore.people[connection.idB]);
    });

    return exactRoles;
  }

  function updateConnection(idA: string, idB: string, connection: PeopleConnection) {
    const wasUpdated = characterStore.$peopleConnections.update(
      [
        {idA: idA, idB: idB},
        {idA: idB, idB: idA},
      ],
      connection,
    );

    if (!wasUpdated) {
      characterStore.$peopleConnections.add({
        ...connection,
        idA: idA,
        idB: idB,
      });
    }
  }

  return {findPersonConnection, findPersonConnectionsByRole, findExactRoles, updateConnection};
}
