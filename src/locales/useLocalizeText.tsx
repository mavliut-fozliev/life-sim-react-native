import useGlobalStore from '../storage/store';
import {ObjectRecord} from '../types/common';
import {Locale} from '../types/localizedText';
import en_common from './en/common.json';
import en_menu from './en/menu.json';
import ru_common from './ru/common.json';
import ru_menu from './ru/menu.json';

const locales: ObjectRecord<Locale> = {
  en: {common: en_common, menu: en_menu},
  ru: {common: ru_common, menu: ru_menu},
};

export function useLocalizeText() {
  const {$localizedText} = useGlobalStore();

  return (language: string) => {
    $localizedText.set(locales[language]);
  };
}
