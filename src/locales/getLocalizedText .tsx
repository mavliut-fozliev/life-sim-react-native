import {settingsStore} from '../storage/store';
import en_menu from './en/menu.json';
import ru_menu from './ru/menu.json';

type Locale = {
  menu: {
    countries: Record<string, string>;
  };
};

const locales: Record<string, Locale> = {
  en: {menu: en_menu},
  ru: {menu: ru_menu},
};

export function getLocalizedText() {
  const language = settingsStore.language.get() || 'en';
  console.log(language);
  return locales[language];
}
