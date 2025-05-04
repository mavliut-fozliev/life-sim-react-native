import {
  PeopleRelationship,
  PeopleRole,
  PeopleSituation,
  PlacePeopleType,
  SpriteEras,
} from '../consts/character/characterProps';
import {Cities} from '../consts/cities';
import {Countries} from '../consts/countries';
import {Gender} from '../consts/gender';
import {Chances, ObjectRecord} from './common';
import {Icon} from './icons';

export type CommonSpriteVariants = {
  legs: 'light';
  body: 'light' | 'dark';
  head: 'light' | 'dark';
  eyes: 'black';
  mouth: 'smile';
  hair?: 'average';
};

export type SpriteVariants = {
  [SpriteEras.infant]: {} & CommonSpriteVariants;
  [SpriteEras.child]: {};
  [SpriteEras.preTeen]: {};
  [SpriteEras.teenager]: {};
  [SpriteEras.adult]: {} & CommonSpriteVariants;
  [SpriteEras.elder]: {} & CommonSpriteVariants;
};

export type Person = {
  id: string;
  gender: Gender;
  name: string;
  surname: string;
  age: number;
  role: PeopleRole;
  relationship: number;
  performedActions?: number;
  situation?: PeopleSituation;
  situationDuration?: number;
  params: {
    health: number;
  };
  sprite: CommonSpriteVariants;
  placePeopleType?: PlacePeopleType;
};

export type FamilyPerson = {
  country: Countries;
  city: Cities;
} & Person;

export type PlacePeople = ObjectRecord<ObjectRecord<string[]>>;

export enum SpecialEffect {
  GetMoney,
  MakeFamiliar,
  ShowHealth,
}

type DescriptionParams = {
  health?: number;
  name?: string;
};

export type PeopleInteraction = {
  icon: Icon;
  label: string;
  conditions: PeopleRelationship[];
  oneTimeImpact: Chances<number>;
  situationImpact: Chances<PeopleSituation | undefined>;
  specialEffects?: SpecialEffect[];
  getDescriptions: (params: DescriptionParams) => string;
};

export type PeopleInteractions = {
  [gender in Gender]: {
    [role in PeopleRole]?: PeopleInteraction[];
  };
};
