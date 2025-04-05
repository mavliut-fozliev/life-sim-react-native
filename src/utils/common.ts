export const getRandomArrayItem = <T>(array: T[]): T | undefined => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const safestr = (value: string | undefined) => value ?? '';
