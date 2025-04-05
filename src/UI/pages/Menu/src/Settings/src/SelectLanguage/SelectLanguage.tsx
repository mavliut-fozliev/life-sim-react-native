import React, {useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {Language} from '../../../../../../../types/localizedText';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';

const languages: SelectItem<Language>[] = [
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
  const [language, setLanguage] = useState<Language>('en');
  const localizeText = useLocalizeText();

  function handleSelect(v: Language) {
    setLanguage(v);
    localizeText(v);
  }

  return <Select<Language> value={language} items={languages} onSelectItem={handleSelect} />;
}

export default SelectLanguage;
