export enum SpriteEras {
  infant = 'infant',
  child = 'child',
  preTeen = 'preTeen',
  teenager = 'teenager',
  adult = 'adult',
  elder = 'elder',
}

export enum PlacePeopleType {
  Visitor = 'Visitor',
  Bartender = 'Bartender',
  SecurityGuard = 'SecurityGuard',
}

export enum PeopleRole {
  Mother = 'Mother',
  Father = 'Father',
  Brother = 'Brother',
  Sister = 'Sister',
  Spouse = 'Spouse',
  Friend = 'Friend',
  Familiar = 'Familiar',
  Stranger = 'Stranger',
}

export enum PeopleRelationship {
  Love = 'Love',
  Friendliness = 'Friendliness',
  Neutrality = 'Neutrality',
  Coldness = 'Coldness',
  Hostility = 'Hostility',
}

export const peopleRelationshipColors = {
  [PeopleRelationship.Love]: '#F56C42',
  [PeopleRelationship.Friendliness]: '#64B5F6',
  [PeopleRelationship.Neutrality]: '#BDBDBD',
  [PeopleRelationship.Coldness]: '#D32F2F',
  [PeopleRelationship.Hostility]: '#9E9E9E',
};

export const peopleRelationshipMap: {[key in PeopleRelationship]: number} = {
  [PeopleRelationship.Love]: 100,
  [PeopleRelationship.Friendliness]: 85,
  [PeopleRelationship.Neutrality]: 65,
  [PeopleRelationship.Coldness]: 45,
  [PeopleRelationship.Hostility]: 25,
};

const parentsRelationshipLabels = {
  [PeopleRelationship.Love]: 'Care',
  [PeopleRelationship.Friendliness]: 'Support',
  [PeopleRelationship.Neutrality]: 'Expectation',
  [PeopleRelationship.Coldness]: 'Coldness',
  [PeopleRelationship.Hostility]: 'Indifference',
};

const spouseRelationshipLabels = {
  [PeopleRelationship.Love]: 'Love',
  [PeopleRelationship.Friendliness]: 'Attachment',
  [PeopleRelationship.Neutrality]: 'Understanding',
  [PeopleRelationship.Coldness]: 'Misunderstanding',
  [PeopleRelationship.Hostility]: 'Alienation',
};

const siblingsRelationshipLabels = {
  [PeopleRelationship.Love]: 'Devotion',
  [PeopleRelationship.Friendliness]: 'Support',
  [PeopleRelationship.Neutrality]: 'Apathy',
  [PeopleRelationship.Coldness]: 'Coldness',
  [PeopleRelationship.Hostility]: 'Conflict',
};

const familiarRelationshipLabels = {
  [PeopleRelationship.Love]: 'Friendliness',
  [PeopleRelationship.Friendliness]: 'Politeness',
  [PeopleRelationship.Neutrality]: 'Neutrality',
  [PeopleRelationship.Coldness]: 'Coldness',
  [PeopleRelationship.Hostility]: 'Hostility',
};

export const peopleRelationshipLabels: Omit<
  {[role in PeopleRole]: {[relationship in PeopleRelationship]: string}},
  'Stranger'
> = {
  [PeopleRole.Mother]: parentsRelationshipLabels,
  [PeopleRole.Father]: parentsRelationshipLabels,
  [PeopleRole.Brother]: siblingsRelationshipLabels,
  [PeopleRole.Sister]: siblingsRelationshipLabels,
  [PeopleRole.Spouse]: spouseRelationshipLabels,
  [PeopleRole.Friend]: siblingsRelationshipLabels,
  [PeopleRole.Familiar]: familiarRelationshipLabels,
};

export enum PeopleSituation {
  Trust = 'Trust',
  Admiration = 'Admiration',
  Disappointment = 'Disappointment',
  Respect = 'Respect',
  Resentment = 'Resentment',
  Conflict = 'Conflict',
}

export const peopleSituationColors = {
  [PeopleSituation.Trust]: '#4CAF50',
  [PeopleSituation.Admiration]: '#FFEB3B',
  [PeopleSituation.Disappointment]: '#9C27B0',
  [PeopleSituation.Respect]: '#3F51B5',
  [PeopleSituation.Resentment]: '#FF5722',
  [PeopleSituation.Conflict]: '#F44336',
};

export const peopleSituationImpact = {
  [PeopleSituation.Trust]: +5,
  [PeopleSituation.Admiration]: +3,
  [PeopleSituation.Respect]: +1,
  [PeopleSituation.Resentment]: -2,
  [PeopleSituation.Disappointment]: -3,
  [PeopleSituation.Conflict]: -5,
};

export enum PeopleHealth {
  Excellent = 'Excellent',
  Good = 'Good',
  Average = 'Average',
  Bad = 'Bad',
  Critical = 'Critical',
}

export const peopleHealthMap: {[key in PeopleHealth]: number} = {
  [PeopleHealth.Excellent]: 100,
  [PeopleHealth.Good]: 80,
  [PeopleHealth.Average]: 60,
  [PeopleHealth.Bad]: 40,
  [PeopleHealth.Critical]: 20,
};
