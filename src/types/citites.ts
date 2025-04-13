import {Countries} from '../consts/countries';

export type Cities = {
  [key in Countries]: {
    [city: string]: string;
  };
};
