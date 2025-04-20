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

export type SpriteVariants = {
  infant: {} & CommonSpriteVariants;
  child: {};
  preTeen: {};
  teenager: {};
  adult: {} & CommonSpriteVariants;
  elder: {} & CommonSpriteVariants;
};

export type Person = {
  gender: Gender;
  name: string;
  surname: string;
  age: number;
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

export enum PlacePeopleType {
  Visitor = 'Visitor',
  Bartender = 'Bartender',
  SecurityGuard = 'SecurityGuard',
}

export type PlacePeople = ObjectRecord<ObjectRecord<Person[]>>;
