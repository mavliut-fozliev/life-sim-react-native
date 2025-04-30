import {PeopleInteractions} from '../../types/people';
import {PeopleRelationship, PeopleRole, PeopleSituation} from './characterProps';

export const interactions: PeopleInteractions = {
  [PeopleRole.Mother]: [
    {
      label: 'Talk',
      conditions: [
        PeopleRelationship.Love,
        PeopleRelationship.Friendliness,
        PeopleRelationship.Neutrality,
        PeopleRelationship.Coldness,
      ],
      oneTimeImpact: [
        {value: 3, chance: 70},
        {value: 5, chance: 30},
      ],
      situationImpact: [
        {value: undefined, chance: 70},
        {value: PeopleSituation.Trust, chance: 30},
      ],
    },
    {
      label: 'Try To Make Peace',
      conditions: [PeopleRelationship.Hostility],
      oneTimeImpact: [
        {value: 5, chance: 80},
        {value: 30, chance: 20},
      ],
      situationImpact: [
        {value: PeopleSituation.Respect, chance: 80},
        {value: undefined, chance: 20},
      ],
    },
  ],
  [PeopleRole.Father]: [],
  [PeopleRole.Brother]: [],
  [PeopleRole.Sister]: [],
  [PeopleRole.Spouse]: [],
  [PeopleRole.Friend]: [],
  [PeopleRole.Familiar]: [],
  [PeopleRole.Stranger]: [],
};
