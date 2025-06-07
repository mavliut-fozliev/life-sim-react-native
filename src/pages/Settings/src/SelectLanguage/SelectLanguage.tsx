import React from 'react';
import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import Select, {SelectItem} from '../../../../shared/ui/components/Select/Select';
import useGameStore from '../../../../shared/store/gameStore';

const languages: SelectItem[] = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Русский',
    value: 'ru',
  },
];

function SelectLanguage() {
  const {language, $language} = useGameStore();
  const {translate} = useLocalizeText();

  function handleSelect(v: string) {
    $language.set(v);
  }

  return <Select value={language} items={languages} onSelectItem={handleSelect} label={translate('Language')} />;
}

export default SelectLanguage;
