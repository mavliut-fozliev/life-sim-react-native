import {Person} from '../../../../../../../../../../shared/types/people';
import {
  findMatchingValueByMaxKey,
  getRandomInRange,
  getRandomValue,
} from '../../../../../../../../../../shared/utils/common';

export function kill(person: Person) {
  const healthMap = {
    0: 100,
    4: getRandomInRange(50, 90),
    14: getRandomInRange(15, 50),
    29: getRandomInRange(5, 15),
    49: getRandomInRange(1, 5),
    69: getRandomInRange(0.1, 0.5),
  };

  // if health >= 70, then kill chance is 0
  const killChance = findMatchingValueByMaxKey(healthMap, person.health) ?? 0;

  const shouldDead = getRandomValue([
    {value: false, chance: 100 - killChance},
    {value: true, chance: killChance},
  ]);

  return shouldDead;
}
