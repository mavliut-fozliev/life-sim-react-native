export const getRandomArrayItem = <T>(array: T[]): T | undefined => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const safestr = (value: string | undefined) => value ?? '';

/**
 * @returns {number} biased number from min (inclusive) to max (inclusive).
 */
export const biasedRandom = (min: number, max: number) => {
  const random = Math.random();
  const biased = 1 - Math.sqrt(random);

  return Math.floor(min + (max - min + 1) * biased);
};

export const getRandomValue = (array: {value: any; chance: number}[]) => {
  const random = Math.random() * 100;

  const sorted = array.sort((a, b) => b.chance - a.chance);

  let totalChance = 0;

  const found = sorted.find(item => {
    totalChance += item.chance;
    return random < totalChance;
  });

  return found?.value || sorted[0].value;
};
