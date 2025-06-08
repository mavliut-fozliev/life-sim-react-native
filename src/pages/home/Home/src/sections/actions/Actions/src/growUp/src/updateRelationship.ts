import {PeopleRole, peopleSituationImpact} from '../../../../../../../../../../features/character/characterProps';
import {PeopleConnection} from '../../../../../../../../../../shared/types/people';

export function updateRelationship(connection: PeopleConnection): boolean {
  if (connection.role === PeopleRole.Stranger) {
    return false;
  }

  const initialImpact = -2;
  connection.relationship = connection.relationship + initialImpact;
  connection.performedActions = 0;

  if (connection.situation && connection.situationDuration) {
    connection.relationship = connection.relationship + peopleSituationImpact[connection.situation];
    connection.situationDuration = connection.situationDuration - 1;

    if (connection.situationDuration === 1) {
      connection.situation = undefined;
    }
  }

  return true;
}
