import {Places} from '../types/places';
import {Countries} from './countries';

export const places: Places = {
  [Countries.ALB]: {
    'Tirana': {
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
    'Moscow': {
      'StrengthHouse': {
        type: 'Gym',
        level: '2',
      },
      'Fit Lab': {
        type: 'Gym',
        level: '3',
      },
    },
    'Rostov-on-Don': {
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
    'Istanbul': {},
    'Ankara': {},
    'Izmir': {},
    'Bursa': {},
    'Antalya': {},
  },
  [Countries.USA]: {
    'New York': {},
  },
};
