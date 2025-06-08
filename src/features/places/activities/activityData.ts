import {StatVariant} from '../../../shared/constants/parameters';
import {ResourceVariant} from '../../../shared/constants/resources';
import {PlaceLevel, PlaceType} from '../common';
import {ActivityData} from '../types';

export const activityData: ActivityData = {
  [PlaceType.Gym]: {
    [PlaceLevel.One]: [{label: '', price: [], action: []}],
    [PlaceLevel.Two]: [
      {
        label: 'Run on a treadmill',
        price: [{resource: ResourceVariant.energy, amount: 3}],
        action: [
          {
            stat: StatVariant.power,
            chances: [
              {value: 1, chance: 40},
              {value: 2, chance: 40},
              {value: 3, chance: 20},
            ],
          },
        ],
      },
    ],
    [PlaceLevel.Three]: [
      {
        label: 'Yoga',
        price: [{resource: ResourceVariant.energy, amount: 2}],
        action: [
          {
            stat: StatVariant.health,
            chances: [
              {value: 1, chance: 70},
              {value: 2, chance: 30},
            ],
          },
          {
            stat: StatVariant.power,
            chances: [
              {value: 1, chance: 70},
              {value: 2, chance: 30},
            ],
          },
        ],
      },
    ],
  },
  [PlaceType.Hospital]: {
    [PlaceLevel.One]: [{label: '', price: [], action: []}],
    [PlaceLevel.Two]: [
      {
        label: 'Take a check-up',
        price: [
          {resource: ResourceVariant.money, amount: 500},
          {resource: ResourceVariant.energy, amount: 1},
        ],
        action: [],
      },
    ],
    [PlaceLevel.Three]: [{label: '', price: [], action: []}],
  },
  [PlaceType.Nightclub]: {
    [PlaceLevel.One]: [{label: '', price: [], action: []}],
    [PlaceLevel.Two]: [{label: '', price: [], action: []}],
    [PlaceLevel.Three]: [
      {
        label: 'Just dance',
        price: [{resource: ResourceVariant.energy, amount: 1}],
        action: [
          {
            stat: StatVariant.charm,
            chances: [
              {value: 1, chance: 80},
              {value: 2, chance: 20},
            ],
          },
        ],
      },
    ],
  },
};
