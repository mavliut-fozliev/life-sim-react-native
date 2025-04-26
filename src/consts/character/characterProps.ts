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
  Friend = 'Friend',
  Neighbour = 'Neighbour',
  Stranger = 'Stranger',
}

export enum PeopleRelationship {
  Love = 'Love',
  Trust = 'Trust',
  Friendliness = 'Friendliness',
  Neutrality = 'Neutrality',
  Strictness = 'Strictness',
  Conflict = 'Conflict',
  Hostility = 'Hostility',
  Indifference = 'Indifference',
}

export const peopleRelationshipColors = {
  [PeopleRelationship.Love]: '#FF5573',
  [PeopleRelationship.Trust]: '#64DC96',
  [PeopleRelationship.Friendliness]: '#FFD264',
  [PeopleRelationship.Neutrality]: '#B4B4B4',
  [PeopleRelationship.Strictness]: '#4682B4',
  [PeopleRelationship.Conflict]: '#FF8C00',
  [PeopleRelationship.Hostility]: '#DC143C',
  [PeopleRelationship.Indifference]: '#82B4FF',
};
