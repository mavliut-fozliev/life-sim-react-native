import {PeopleEffect} from '../../../../../../../../../../../../consts/character/characterProps';
import {ImmuneSystem} from '../../../../../../../../../../../../consts/character/genetics';
import {Person} from '../../../../../../../../../../../../types/people';
import {findMatchingValueByMaxKey, getRandomValue} from '../../../../../../../../../../../../utils/common';

export function updateHealth(person: Person) {
  const impactMap = {
    30: 0,
    50: -1,
    60: -2,
    80: -3,
  };

  const ageImpact = findMatchingValueByMaxKey(impactMap, person.age) ?? -5;

  const immuneSystemMap = {
    [ImmuneSystem.Weak]: [
      {value: 0, chance: 60},
      {value: -1, chance: 30},
      {value: 1, chance: 10},
    ],
    [ImmuneSystem.Normal]: [
      {value: 0, chance: 60},
      {value: -1, chance: 20},
      {value: 1, chance: 20},
    ],
    [ImmuneSystem.Strong]: [
      {value: 0, chance: 60},
      {value: 1, chance: 30},
      {value: -1, chance: 10},
    ],
  };

  const immuneSystemChances = immuneSystemMap[person.genetics.immuneSystem];
  const immuneSystemImpact = getRandomValue(immuneSystemChances);

  const longevityImpact = person.genetics.longevity ? 1 : 0;

  const effectMap = {
    [PeopleEffect.Cold]: -1,
    [PeopleEffect.Diarrhea]: -2,
  };

  let effectImpact = 0;

  Object.entries(effectMap).forEach(([effect, impact]) => {
    const hadEffect = person.effects.some(e => e.effect === effect);
    if (hadEffect) {
      effectImpact += impact;
    }
  });

  const totalImpact = ageImpact + immuneSystemImpact + longevityImpact + effectImpact;

  return {
    itemKeys: [person.id, 'params', 'health'],
    value: person.health + totalImpact,
  };
}
