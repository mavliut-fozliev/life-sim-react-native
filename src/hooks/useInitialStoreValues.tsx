import {useLocalizeText} from '../locales/useLocalizeText';
import useGlobalStore from '../storage/store';

export function useInitialStoreValues() {
  const {language, $language} = useGlobalStore();
  const localizeText = useLocalizeText();

  return () => {
    if (!language) {
      $language.set('en');
      localizeText('en');
    }
  };
}
