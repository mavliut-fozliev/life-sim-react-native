import useGlobalStore from '../storage/store';
import ru from './ru/index';

// 'ru' is the main language that contains the main structure, other languages ​​should be guided by it
const localizedTexts = {
  ru,
};

function mirrorKeys<T extends Record<string, any>>(obj: T): T {
  const result: any = {};

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'object') {
      result[key] = mirrorKeys(value);
    } else {
      result[key] = key;
    }
  }

  return result;
}

export function useLocalizeText() {
  const {$localizedText} = useGlobalStore();

  return (language: string) => {
    let localizedText;

    switch (language) {
      case 'ru':
        localizedText = localizedTexts.ru;
        break;
      default:
        localizedText = mirrorKeys(localizedTexts.ru);
        break;
    }

    $localizedText.set(localizedText);
  };
}
