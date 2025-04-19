import {Cities} from '../consts/cities';
import {Countries} from '../consts/countries';

export enum PlaceType {
  Gym = 'Gym',
  Hospital = 'Hospital',
}
export enum PlaceLevel {
  One = 'One',
  Two = 'Two',
  Three = 'Three',
}

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
