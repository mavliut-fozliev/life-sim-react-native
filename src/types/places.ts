import {Cities} from '../consts/cities';
import {Countries} from '../consts/countries';
import {PlaceLevel, PlaceType, RestrictionProp} from '../consts/places/common';
import {ResourceVariant} from '../consts/resources';

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
