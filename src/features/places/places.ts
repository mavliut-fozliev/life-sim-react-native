import {Places} from './types';
import {PlaceLevel, PlaceType, RestrictionProp} from './common';
import {Countries} from '../../shared/constants/countries';
import {Cities} from '../../shared/constants/cities';

export const places: Places = {
  [Countries.Albania]: {
    [Cities.Tirana]: {
      'Center': {
        'Fitness Palace': {
          type: PlaceType.Gym,
          level: PlaceLevel.Three,
        },
        'Strong Albania': {
          type: PlaceType.Gym,
          level: PlaceLevel.Two,
        },
      },
    },
  },
  [Countries.Russia]: {
    [Cities.Moscow]: {
      'Center': {
        'Fit Lab': {
          type: PlaceType.Gym,
          level: PlaceLevel.Three,
        },
        'State Polyclinic': {
          type: PlaceType.Hospital,
          level: PlaceLevel.Two,
        },
      },
      'West of the Capital': {
        'StrengthHouse': {
          type: PlaceType.Gym,
          level: PlaceLevel.Two,
        },
      },
      'Southern District': {
        'клуб (мафионзный) (для теста)': {
          type: PlaceType.Nightclub,
          level: PlaceLevel.Three,
          restrictions: {
            [RestrictionProp.age]: {
              min: 18,
            },
          },
        },
      },
    },
    [Cities.RostovOnDon]: {
      'Center': {
        'Iron City': {
          type: PlaceType.Gym,
          level: PlaceLevel.Two,
        },
      },
    },
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
