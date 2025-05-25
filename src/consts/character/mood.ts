export enum PlayerMood {
  Euphoria = 'Euphoria',
  Happy = 'Happy',
  Neutral = 'Neutral',
  Sad = 'Sad',
  Depressive = 'Depressive',
  Apathetic = 'Apathetic',
}

export const playerMoodColors = {
  [PlayerMood.Euphoria]: '#FFE600',
  [PlayerMood.Happy]: '#7CFC00',
  [PlayerMood.Neutral]: '#C0C0C0',
  [PlayerMood.Sad]: '#5DADE2',
  [PlayerMood.Depressive]: '#1A5276',
  [PlayerMood.Apathetic]: '#2C2C2C',
};

export const playerMoodMap: {[key in PlayerMood]: number} = {
  [PlayerMood.Euphoria]: 100,
  [PlayerMood.Happy]: 89,
  [PlayerMood.Neutral]: 69,
  [PlayerMood.Sad]: 49,
  [PlayerMood.Depressive]: 29,
  [PlayerMood.Apathetic]: 9,
};
