import {Countries} from './countries';

export enum Cities {
  Tirana = 'Tirana',
  Moscow = 'Moscow',
  RostovOnDon = 'Rostov-on-Don',
  Istanbul = 'Istanbul',
  Ankara = 'Ankara',
  Izmir = 'Izmir',
  Bursa = 'Bursa',
  Antalya = 'Antalya',
  NewYork = 'New York',
}

type CountryCities = {
  [country in Countries]: Partial<{
    [city in Cities]: object;
  }>;
};

export const countryCities: CountryCities = {
  [Countries.ALB]: {
    'Tirana': {},
  },
  [Countries.RUS]: {
    'Moscow': {},
    'Rostov-on-Don': {},
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
