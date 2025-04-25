import {Cities} from '../consts/cities';
import {Countries} from '../consts/countries';
import {Gender} from '../consts/gender';
import {ObjectRecord} from './common';

export type CommonSpriteVariants = {
  legs: 'light';
  body: 'light' | 'dark';
  head: 'light' | 'dark';
  eyes: 'black';
  mouth: 'smile';
  hair?: 'average';
};

export enum SpriteEras {
  infant = 'infant',
  child = 'child',
  preTeen = 'preTeen',
  teenager = 'teenager',
  adult = 'adult',
  elder = 'elder',
}

export type SpriteVariants = {
  [SpriteEras.infant]: {} & CommonSpriteVariants;
  [SpriteEras.child]: {};
  [SpriteEras.preTeen]: {};
  [SpriteEras.teenager]: {};
  [SpriteEras.adult]: {} & CommonSpriteVariants;
  [SpriteEras.elder]: {} & CommonSpriteVariants;
};

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
}

export enum PeopleRelationship {
  Love = 'Love',
  Trust = 'Trust',
}

export type Person = {
  id: string;
  gender: Gender;
  name: string;
  surname: string;
  age: number;
  role: PeopleRole;
  relationship: PeopleRelationship[];
  sprite: CommonSpriteVariants;
  placePeopleType?: PlacePeopleType;
};

export type FamilyPerson = {
  country: Countries;
  city: Cities;
  params: {
    money: number;
    health: number;
  };
} & Person;

export type PlacePeople = ObjectRecord<ObjectRecord<string[]>>;
