export enum PlayerStatus {
  Euphoria = 'Euphoria',
  Happy = 'Happy',
  Neutral = 'Neutral',
  Sad = 'Sad',
  Depressive = 'Depressive',
  Apathetic = 'Apathetic',
}

export const playerStatusColors = {
  [PlayerStatus.Euphoria]: '#FFE600',
  [PlayerStatus.Happy]: '#7CFC00',
  [PlayerStatus.Neutral]: '#C0C0C0',
  [PlayerStatus.Sad]: '#5DADE2',
  [PlayerStatus.Depressive]: '#1A5276',
  [PlayerStatus.Apathetic]: '#2C2C2C',
};

export const playerStatusMap: {[key in PlayerStatus]: number} = {
  [PlayerStatus.Euphoria]: 100,
  [PlayerStatus.Happy]: 89,
  [PlayerStatus.Neutral]: 69,
  [PlayerStatus.Sad]: 49,
  [PlayerStatus.Depressive]: 29,
  [PlayerStatus.Apathetic]: 9,
};
