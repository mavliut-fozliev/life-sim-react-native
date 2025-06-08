import {Cities} from '../../shared/constants/cities';
import {Countries} from '../../shared/constants/countries';
import {StatVariant} from '../../shared/constants/parameters';
import {ResourceVariant} from '../../shared/constants/resources';
import {Chances} from '../../shared/types/common';
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

export type ActivityItem = {
  label: string;
  price: Array<{resource: ResourceVariant; amount: number}>;
  action: Array<{stat: StatVariant; chances: Chances<number>}>;
};

export type ActivityData = Record<PlaceType, Record<PlaceLevel, Array<ActivityItem>>>;
