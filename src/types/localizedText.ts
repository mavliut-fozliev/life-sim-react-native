import {ObjectRecord} from './common';

type obj = ObjectRecord<string | undefined> | undefined;

export type Locale = {
  common: {
    buttons: obj;
    emptySelectItems: string;
    emptyTextInput: string;
  };
  menu: {
    options: obj;
    newLifeInputs: obj;
    settings: obj;
    countries: obj;
    cities: ObjectRecord<obj | undefined>;
    cityPlaceholder: string;
    genders: obj;
    button: obj;
  };
  places: ObjectRecord<
    | {
        title: string;
        activities: obj;
      }
    | undefined
  >;
};
