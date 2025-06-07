import {Cities} from '../constants/cities';
import {Countries} from '../constants/countries';
import {PlaceLevel, PlaceType, RestrictionProp} from '../constants/places/common';
import {ResourceVariant} from '../constants/resources';

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
