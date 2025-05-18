import {useCallback} from 'react';
import useGlobalStore from '../storage/store';
import {Language} from '../types/language';
import ru from './ru';

const localizedTexts: {[key in Language]: object | undefined} = {
  en: undefined,
  ru,
};

export function useLocalizeText() {
  const {language} = useGlobalStore();

  const localizedText = localizedTexts[language] as any;

  const translate = useCallback(
    (initialText: string): string => {
      if (!localizedText) {
        return initialText;
      }

      const translatedText = localizedText[initialText];

      if (!translatedText) {
        return 'NOT-FOUND!'; // should return initialText in production
        // return initialText;
      }

      if (typeof translatedText !== 'string') {
        return 'NOT-STRING ERROR!';
      }

      return translatedText;
    },
    [localizedText],
  );

  return {translate};
}
