import {Cities} from '../consts/cities';
import {Countries} from '../consts/countries';
import {ResourceVariant} from './resources';

export enum PlaceType {
  Gym = 'Gym',
  Hospital = 'Hospital',
  Nightclub = 'Nightclub',
}
export enum PlaceLevel {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
}

export enum RestrictionProp {
  age = 'age',
  gender = 'gender',
}

export type PlaceProps = {
  type: PlaceType;
  level: PlaceLevel;
  restrictions?: {
    [resource in ResourceVariant | RestrictionProp]?: {
      min?: number;
      max?: number;
    };
  };
};

export type DistrictProps = {
  [place: string]: PlaceProps;
};

export type Places = {
  [country in Countries]: Partial<{
    [city in Cities]: {
      [district: string]: DistrictProps;
    };
  }>;
};
