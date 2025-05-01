import {PeopleInteraction, PeopleInteractions} from '../../types/people';
import {PeopleRelationship, PeopleRole, PeopleSituation} from './characterProps';

const parentsInteractions: PeopleInteraction[] = [
  {
    label: 'Spend Time Together',
    conditions: [PeopleRelationship.Love, PeopleRelationship.Friendliness, PeopleRelationship.Neutrality],
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
    label: 'Give Praise',
    conditions: [
      PeopleRelationship.Love,
      PeopleRelationship.Friendliness,
      PeopleRelationship.Neutrality,
      PeopleRelationship.Coldness,
    ],
    oneTimeImpact: [
      {value: 2, chance: 60},
      {value: 3, chance: 40},
    ],
    situationImpact: [
      {value: PeopleSituation.Admiration, chance: 50},
      {value: PeopleSituation.Respect, chance: 30},
      {value: undefined, chance: 20},
    ],
  },
  {
    label: 'Talk on the Phone',
    conditions: [
      PeopleRelationship.Love,
      PeopleRelationship.Friendliness,
      PeopleRelationship.Neutrality,
      PeopleRelationship.Coldness,
    ],
    oneTimeImpact: [
      {value: 3, chance: 50},
      {value: 4, chance: 50},
    ],
    situationImpact: [
      {value: PeopleSituation.Admiration, chance: 50},
      {value: undefined, chance: 50},
    ],
  },
  {
    label: 'Try to Make Peace',
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
  {
    label: 'Ask About Health', //нужно реализовать показывание инфы о здоровье персонажа
    conditions: [PeopleRelationship.Love, PeopleRelationship.Friendliness, PeopleRelationship.Neutrality],
    oneTimeImpact: [
      {value: 3, chance: 70},
      {value: 4, chance: 30},
    ],
    situationImpact: [
      {value: undefined, chance: 70},
      {value: PeopleSituation.Respect, chance: 30},
    ],
  },
  {
    label: 'Ask for Money', //нужно реализовать давание денег с какой-то вероятностью
    conditions: [PeopleRelationship.Love, PeopleRelationship.Friendliness],
    oneTimeImpact: [
      {value: -3, chance: 60},
      {value: -5, chance: 40},
    ],
    situationImpact: [{value: undefined, chance: 100}],
  },
  {
    label: 'Ask for Money', //нужно реализовать давание денег с какой-то вероятностью
    conditions: [PeopleRelationship.Neutrality],
    oneTimeImpact: [{value: -5, chance: 100}],
    situationImpact: [{value: undefined, chance: 100}],
  },
  {
    label: 'Argue',
    conditions: [
      PeopleRelationship.Love,
      PeopleRelationship.Friendliness,
      PeopleRelationship.Neutrality,
      PeopleRelationship.Coldness,
    ],
    oneTimeImpact: [
      {value: -8, chance: 60},
      {value: -15, chance: 40},
    ],
    situationImpact: [
      {value: PeopleSituation.Conflict, chance: 50},
      {value: PeopleSituation.Resentment, chance: 40},
      {value: undefined, chance: 10},
    ],
  },
  {
    label: 'Steal Money',
    conditions: [
      PeopleRelationship.Love,
      PeopleRelationship.Friendliness,
      PeopleRelationship.Neutrality,
      PeopleRelationship.Coldness,
      PeopleRelationship.Hostility,
    ],
    oneTimeImpact: [
      {value: -30, chance: 50},
      {value: -50, chance: 50},
    ],
    situationImpact: [
      {value: PeopleSituation.Conflict, chance: 70},
      {value: PeopleSituation.Disappointment, chance: 20},
      {value: undefined, chance: 10},
    ],
  },
];

export const interactions: PeopleInteractions = {
  [PeopleRole.Mother]: parentsInteractions,
  [PeopleRole.Father]: parentsInteractions,
  [PeopleRole.Brother]: [],
  [PeopleRole.Sister]: [],
  [PeopleRole.Spouse]: [],
  [PeopleRole.Friend]: [],
  [PeopleRole.Familiar]: [],
  [PeopleRole.Stranger]: [],
};
