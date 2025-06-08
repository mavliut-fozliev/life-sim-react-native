import {PeopleRole} from '../characterProps';
import {SpecialEffect} from './common';

export const specialEffects: Partial<Record<SpecialEffect, {key: string; value: any}>> = {
  [SpecialEffect.MakeFamiliar]: {key: 'role', value: PeopleRole.Familiar},
};
