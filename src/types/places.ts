export type PlaceType = 'gym_1' | 'gym_2' | 'gym_3' | 'hospital_1' | 'hospital_2';

export type Places = {
  [city: string]: {
    [name: string]: {
      type: PlaceType;
    };
  };
};
