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
    [Cities.Tirana]: {},
  },
  [Countries.RUS]: {
    [Cities.Moscow]: {},
    [Cities.RostovOnDon]: {},
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
