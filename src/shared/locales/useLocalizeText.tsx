import {useCallback} from 'react';
import {Language} from '../types/language';
import ru from './ru';
import useGameStore from '../store/gameStore';

const localizedTexts: {[key in Language]: object | undefined} = {
  en: undefined,
  ru,
};

export function useLocalizeText() {
  const {language} = useGameStore();

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
