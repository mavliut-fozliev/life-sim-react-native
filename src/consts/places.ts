import {Places} from '../types/places';

export const places: Places = {
  ALB: {
    code: 'ALB',
    cities: {
      Tirana: {},
    },
  },
  RUS: {
    code: 'RUS',
    cities: {
      Moscow: {},
      RostovOnDon: {
        MasterSten: {
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
