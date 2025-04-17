import {Places} from '../types/places';
import {Cities} from './cities';
import {Countries} from './countries';

export const places: Places = {
  [Countries.ALB]: {
    [Cities.Tirana]: {
      'Fitness Palace': {
        type: 'Gym',
        level: '3',
      },
      'Strong Albania': {
        type: 'Gym',
        level: '2',
      },
    },
  },
  [Countries.RUS]: {
    [Cities.Moscow]: {
      'StrengthHouse': {
        type: 'Gym',
        level: '2',
      },
      'Fit Lab': {
        type: 'Gym',
        level: '3',
      },
    },
    [Cities.RostovOnDon]: {
      'Iron City': {
        type: 'Gym',
        level: '2',
      },
      'State Polyclinic': {
        type: 'Hospital',
        level: '2',
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
