import {Chances} from '../../../types/common';
import {ParameterVariant} from '../../parameters';
import {ResourceVariant} from '../../resources';
import {PlaceLevel, PlaceType} from '../common';

type ActivityData = Record<
  PlaceType,
  Record<
    PlaceLevel,
    Array<{
      label: string;
      price: Array<{resource: ResourceVariant; amount: number}>;
      action: Array<{parameter: ParameterVariant; chances: Chances<number>}>;
    }>
  >
>;

export const activityData: ActivityData = {
  [PlaceType.Gym]: {
    [PlaceLevel.One]: [{label: '', price: [], action: []}],
    [PlaceLevel.Two]: [
      {
        label: 'Run on a treadmill',
        price: [{resource: ResourceVariant.energy, amount: 3}],
        action: [
          {
            parameter: ParameterVariant.power,
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
            parameter: ParameterVariant.health,
            chances: [
              {value: 1, chance: 70},
              {value: 2, chance: 30},
            ],
          },
          {
            parameter: ParameterVariant.power,
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
            parameter: ParameterVariant.charm,
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
