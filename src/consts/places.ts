import {Places} from '../types/places';
import {cities} from './citites';
import {Countries} from './countries';

export const places: Places = {
  [cities[Countries.ALB].Tirana]: {
    FitnessPalace: {
      type: 'gym_2',
    },
    StrongAlbania: {
      type: 'gym_3',
    },
  },
  [cities[Countries.RUS].Moscow]: {
    StrengthHouse: {
      type: 'gym_2',
    },
    FitLab: {
      type: 'gym_3',
    },
  },
  [cities[Countries.RUS].RostovOnDon]: {
    IronCity: {
      type: 'gym_2',
    },
    StatePolyclinic: {
      type: 'hospital_2',
    },
  },
  [cities[Countries.TUR].Istanbul]: {},
  [cities[Countries.TUR].Ankara]: {},
  [cities[Countries.TUR].Izmir]: {},
  [cities[Countries.TUR].Bursa]: {},
  [cities[Countries.TUR].Antalya]: {},
  [cities[Countries.USA].NewYork]: {},
};
