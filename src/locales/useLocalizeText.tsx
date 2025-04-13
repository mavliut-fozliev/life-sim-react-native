import useGlobalStore from '../storage/store';
import {ObjectRecord} from '../types/common';
import {Locale} from '../types/localizedText';
import en_common from './en/common.json';
import en_menu from './en/menu.json';
import en_places from './en/places.json';
import en_characterNames from './en/characterNames.json';
import ru_common from './ru/common.json';
import ru_menu from './ru/menu.json';
import ru_places from './ru/places.json';
import ru_characterNames from './ru/characterNames.json';

const locales: ObjectRecord<Locale> = {
  en: {common: en_common, menu: en_menu, places: en_places, characterNames: en_characterNames},
  ru: {common: ru_common, menu: ru_menu, places: ru_places, characterNames: ru_characterNames},
};

export function useLocalizeText() {
  const {$localizedText} = useGlobalStore();

  return (language: string) => {
    $localizedText.set(locales[language]);
  };
}
