export const getRandomArrayItem = <T>(array: T[]): T | undefined => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const safestr = (value: string | undefined) => value ?? '';

/**
 * @returns {number} biased number from min (inclusive) to max (exclusive).
 */
export const biasedRandom = (min: number, max: number) => {
  const random = Math.random();
  const biased = 1 - Math.sqrt(random);

  return Math.floor(min + (max - min) * biased);
};
