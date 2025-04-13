import {Places} from '../types/places';
import {countries} from './countries';

export const places: Places = {
  [countries.ALB]: {
    cities: {
      Tirana: {
        FitnessPalace: {
          type: 'gym_2',
        },
        StrongAlbania: {
          type: 'gym_3',
        },
      },
    },
  },
  [countries.RUS]: {
    cities: {
      Moscow: {
        StrengthHouse: {
          type: 'gym_2',
        },
        FitLab: {
          type: 'gym_3',
        },
      },
      RostovOnDon: {
        IronCity: {
          type: 'gym_2',
        },
        StatePolyclinic: {
          type: 'hospital_2',
        },
      },
    },
  },
  [countries.TUR]: {
    cities: {
      Istanbul: {},
      Ankara: {},
      Izmir: {},
      Bursa: {},
      Antalya: {},
    },
  },
  [countries.USA]: {
    cities: {
      NewYork: {},
    },
  },
};
