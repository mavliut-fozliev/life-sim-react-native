import {PeopleEffect} from '../../../../../../../../../../features/character/characterProps';
import {PeopleEffectObj, Person} from '../../../../../../../../../../shared/types/people';
import {getRandomValue} from '../../../../../../../../../../shared/utils/common';

export function imposingEffects(person: Person) {
  let effects = person.effects.map(e => ({
    ...e,
    duration: e.duration - 1,
  }));

  effects = effects.filter(e => e.duration !== 0);

  const effectChance = {
    [PeopleEffect.Cold]: 10,
    [PeopleEffect.Diarrhea]: 5,
  };

  const peopleEffectDuration: {[key in PeopleEffect]: number} = {
    [PeopleEffect.Cold]: 1,
    [PeopleEffect.Diarrhea]: 2,
  };

  Object.entries(effectChance).forEach(([effect, chance]) => {
    const shouldImpose = getRandomValue([
      {value: false, chance: 100 - chance},
      {value: true, chance: chance},
    ]);

    if (shouldImpose) {
      const effectObj: PeopleEffectObj = {
        effect: effect as PeopleEffect,
        duration: peopleEffectDuration[effect as PeopleEffect],
      };
      effects = [...effects, effectObj];
    }
  });

  return effects;
}
