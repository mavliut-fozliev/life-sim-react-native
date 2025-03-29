import {settingsStore} from '../storage/store';
import {ObjectRecord} from '../types/common';
import en_menu from './en/menu.json';
import ru_menu from './ru/menu.json';

type Locale = {
  menu: {
    countries: ObjectRecord<string>;
    cities: ObjectRecord<ObjectRecord<string>>;
    cityPlaceholder: string;
    genders: ObjectRecord<string>;
  };
};

const locales: Record<string, Locale> = {
  en: {menu: en_menu},
  ru: {menu: ru_menu},
};

export function getLocalizedText() {
  const language = settingsStore.language.get() || 'en';
  return locales[language];
}
