import {PeopleRelationship, PeopleRole} from './characterProps';

type Intercations = {
  [role in PeopleRole]: {
    [interaction: string]: {
      conditions: PeopleRelationship[];
    };
  };
};

export const interactions: Intercations = {
  [PeopleRole.Mother]: {
    talk: {
      conditions: [
        PeopleRelationship.Love,
        PeopleRelationship.Friendliness,
        PeopleRelationship.Neutrality,
        PeopleRelationship.Coldness,
      ],
    },
    makePeace: {
      conditions: [PeopleRelationship.Hostility],
    },
  },
  [PeopleRole.Father]: {},
  [PeopleRole.Brother]: {},
  [PeopleRole.Sister]: {},
  [PeopleRole.Spouse]: {},
  [PeopleRole.Friend]: {},
  [PeopleRole.Familiar]: {},
  [PeopleRole.Stranger]: {},
};
