import {settingsStore} from '../storage/store';
import {ObjectRecord} from '../types/common';
import en_common from './en/common.json';
import en_menu from './en/menu.json';
import ru_common from './ru/common.json';
import ru_menu from './ru/menu.json';

type Locale = {
  common: {
    buttons: ObjectRecord<string>;
    emptySelectItems: string;
    emptyTextInput: string;
  };
  menu: {
    options: ObjectRecord<string>;
    countries: ObjectRecord<string>;
    cities: ObjectRecord<ObjectRecord<string>>;
    cityPlaceholder: string;
    genders: ObjectRecord<string>;
    button: ObjectRecord<string>;
  };
};

const locales: Record<string, Locale> = {
  en: {common: en_common, menu: en_menu},
  ru: {common: ru_common, menu: ru_menu},
};

export function getLocalizedText() {
  const language = settingsStore.language.get() || 'en';
  return locales[language];
}
