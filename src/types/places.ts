import {Cities} from '../consts/cities';
import {Countries} from '../consts/countries';

export type PlaceType = 'Gym' | 'Hospital';
export type PlaceLevel = '1' | '2' | '3';

export type Places = {
  [country in Countries]: Partial<{
    [city in Cities]: {
      [place: string]: {
        type: PlaceType;
        level: PlaceLevel;
      };
    };
  }>;
};
