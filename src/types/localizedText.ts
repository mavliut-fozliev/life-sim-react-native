import {ObjectRecord} from './common';

type obj = ObjectRecord<string | undefined>;

export type Locale = {
  common: {
    buttons: obj;
    emptySelectItems: string;
    emptyTextInput: string;
  };
  menu: {
    options: obj;
    countries: obj;
    cities: ObjectRecord<obj>;
    cityPlaceholder: string;
    genders: obj;
    button: obj;
  };
};

export type Language = 'en' | 'ru';
