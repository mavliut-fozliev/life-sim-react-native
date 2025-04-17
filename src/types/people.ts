import {Cities} from '../consts/cities';
import {Countries} from '../consts/countries';
import {Gender} from '../consts/gender';

export type Person = {
  country: Countries;
  city: Cities;
  gender: Gender;
  name: string;
  surname: string;
  age: number;
  money: number;
  health: number;
};
