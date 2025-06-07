import {Cities} from '../../shared/constants/cities';
import {Countries} from '../../shared/constants/countries';
import {ResourceVariant} from '../../shared/constants/resources';
import {PlaceLevel, PlaceType, RestrictionProp} from './common';

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

export type Places = {
  [country in Countries]: Partial<{
    [city in Cities]: {
      [district: string]: {
        [place: string]: PlaceProps;
      };
    };
  }>;
};
