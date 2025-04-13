import {Places} from '../types/places';

export const places: Places = {
  ALB: {
    code: 'ALB',
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
  RUS: {
    code: 'RUS',
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
  TUR: {
    code: 'TUR',
    cities: {
      Istanbul: {},
      Ankara: {},
      Izmir: {},
      Bursa: {},
      Antalya: {},
    },
  },
  USA: {
    code: 'USA',
    cities: {
      NewYork: {},
    },
  },
};
