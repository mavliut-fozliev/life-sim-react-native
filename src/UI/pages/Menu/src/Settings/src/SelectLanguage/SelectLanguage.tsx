import React from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import useGlobalStore from '../../../../../../../storage/store';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';

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
  const {language, $language} = useGlobalStore();
  const {getText} = useLocalizeText();

  function handleSelect(v: string) {
    $language.set(v);
  }

  return (
    <Select
      value={language}
      items={languages}
      onSelectItem={handleSelect}
      label={getText(['menu', 'settings', 'Language'])}
    />
  );
}

export default SelectLanguage;
