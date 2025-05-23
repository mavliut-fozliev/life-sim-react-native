import {
  PeopleEffect,
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
import {Icon} from '../consts/icons';
import {SpecialEffect} from '../consts/character/interactions/common';
import {ImmuneSystem} from '../consts/character/genetics';

export type CommonSpriteVariants = {
  body: 'light' | 'dark';
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

export type PeopleEffectObj = {effect: PeopleEffect; duration: number};

export type Person = {
  id: string;
  country: Countries;
  city: Cities;
  gender: Gender;
  name: string;
  surname: string;
  age: number;
  role: PeopleRole;
  relationship: number;
  performedActions?: number;
  situation?: PeopleSituation;
  situationDuration?: number;
  dead?: boolean;
  params: {
    health: number;
  };
  genetics: {
    immuneSystem: ImmuneSystem;
    longevity?: boolean;
  };
  effects: Array<PeopleEffectObj>;
  sprite: CommonSpriteVariants;
  placePeopleType?: PlacePeopleType;
};

export type PlacePeople = ObjectRecord<ObjectRecord<string[]>>;

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
