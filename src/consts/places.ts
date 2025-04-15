import {Cities} from './cities';
import {Countries} from './countries';

type Places = {
  [country in Countries]: Partial<{
    [city in Cities]: {
      [place: string]: {
        type: 'Gym' | 'Hospital';
      };
    };
  }>;
};

export const places: Places = {
  [Countries.ALB]: {
    'Tirana': {
      'Fitness Palace': {
        type: 'Gym',
      },
      'Strong Albania': {
        type: 'Gym',
      },
    },
  },
  [Countries.RUS]: {
    'Moscow': {
      'StrengthHouse': {
        type: 'Gym',
      },
      'Fit Lab': {
        type: 'Gym',
      },
    },
    'Rostov-on-Don': {
      'Iron City': {
        type: 'Gym',
      },
      'State Polyclinic': {
        type: 'Hospital',
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
