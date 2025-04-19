import {PlaceLevel, Places, PlaceType} from '../types/places';
import {Cities} from './cities';
import {Countries} from './countries';

export const places: Places = {
  [Countries.ALB]: {
    [Cities.Tirana]: {
      'Fitness Palace': {
        type: PlaceType.Gym,
        level: PlaceLevel.Three,
      },
      'Strong Albania': {
        type: PlaceType.Gym,
        level: PlaceLevel.Two,
      },
    },
  },
  [Countries.RUS]: {
    [Cities.Moscow]: {
      'StrengthHouse': {
        type: PlaceType.Gym,
        level: PlaceLevel.Two,
      },
      'Fit Lab': {
        type: PlaceType.Gym,
        level: PlaceLevel.Three,
      },
    },
    [Cities.RostovOnDon]: {
      'Iron City': {
        type: PlaceType.Gym,
        level: PlaceLevel.Two,
      },
      'State Polyclinic': {
        type: PlaceType.Hospital,
        level: PlaceLevel.Two,
      },
    },
  },
  [Countries.TUR]: {
    [Cities.Istanbul]: {},
    [Cities.Ankara]: {},
    [Cities.Izmir]: {},
    [Cities.Bursa]: {},
    [Cities.Antalya]: {},
  },
  [Countries.USA]: {
    [Cities.NewYork]: {},
  },
};
