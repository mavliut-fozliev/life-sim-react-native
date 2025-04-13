import {Cities} from '../types/citites';
import {Countries} from './countries';

export const cities: Cities = {
  [Countries.ALB]: {
    Tirana: 'Tirana',
  },
  [Countries.RUS]: {
    Moscow: 'Moscow',
    RostovOnDon: 'Rostov-on-Don',
  },
  [Countries.TUR]: {
    Istanbul: 'Istanbul',
    Ankara: 'Ankara',
    Izmir: 'Izmir',
    Bursa: 'Bursa',
    Antalya: 'Antalya',
  },
  [Countries.USA]: {
    NewYork: 'New York',
  },
};
