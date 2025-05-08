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
  [Countries.Albania]: {
    [Cities.Tirana]: {},
  },
  [Countries.Russia]: {
    [Cities.Moscow]: {},
    [Cities.RostovOnDon]: {},
  },
  [Countries.Turkey]: {
    [Cities.Istanbul]: {},
    [Cities.Ankara]: {},
    [Cities.Izmir]: {},
    [Cities.Bursa]: {},
    [Cities.Antalya]: {},
  },
  [Countries.UnitedStatesOfAmerica]: {
    [Cities.NewYork]: {},
  },
};
