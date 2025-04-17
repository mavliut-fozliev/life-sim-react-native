import {useCallback} from 'react';
import useGlobalStore from '../storage/store';
import {Language} from '../types/language';
import ru from './ru';

const localizedTexts: {[key in Language]: object | undefined} = {
  en: undefined,
  ru,
};

function getValueByPath(obj: Record<string, any>, parts: string[]): any {
  return parts.reduce((acc, key) => {
    if (acc && typeof acc === 'object') {
      return acc[key];
    }
    return undefined;
  }, obj);
}

export function useLocalizeText() {
  const {language} = useGlobalStore();

  const localizedText = localizedTexts[language];

  const getText = useCallback(
    (parts: string[]): string => {
      if (!localizedText) {
        return parts[parts.length - 1];
      }

      const text = getValueByPath(localizedText, parts);

      if (typeof text !== 'string') {
        return 'NOT-STRING!';
      }

      return text;
    },
    [localizedText],
  );

  return {getText};
}
