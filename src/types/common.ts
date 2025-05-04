import {ContentRef} from '../consts/general';
import {Person} from './people';

export type ObjectRecord<T> = Record<string, T>;

export type Chances<T> = {value: T; chance: number}[];

export type PopUpContent = {
  contentRef?: ContentRef;
  oneTimeImpact?: number;
  person?: Person;
};

export type History = {
  [age: string]: string[];
};
