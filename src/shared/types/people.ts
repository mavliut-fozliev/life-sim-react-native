import {Cities} from '../constants/cities';
import {Countries} from '../constants/countries';
import {Gender} from '../constants/gender';
import {Chances, ObjectRecord} from './common';
import {Icon} from '../icons/icons';
import {
  PeopleEffect,
  PeopleRelationship,
  PeopleRole,
  PeopleSituation,
  PlacePeopleType,
  SpriteEras,
} from '../../features/character/characterProps';
import {ImmuneSystem} from '../../features/character/genetics';
import {SpecialEffect} from '../../features/character/interactions/common';

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

export type PeopleConnection = {
  idA: string;
  idB: string;
  role: PeopleRole;
  performedActions?: number;
  relationship: number;
  situation?: PeopleSituation;
  situationDuration?: number;
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
  money: number;
  energy: number;
  health: number;
  power: number;
  charm: number;
  mood: number;
  sprite: CommonSpriteVariants;
  dead?: boolean;
  genetics: {
    immuneSystem: ImmuneSystem;
    longevity?: boolean;
  }; // beta
  effects: Array<PeopleEffectObj>; // beta
  placePeopleType?: PlacePeopleType; // use job instead
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
