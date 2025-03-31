import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {settingsStore} from '../../../../../../../../storage/store';

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
  const [language, setLanguage] = useState('');

  function handleSelect(v: string) {
    settingsStore.language.set(v, setLanguage);
  }

  useEffect(() => {
    const savedLanguage = settingsStore.language.get();
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      settingsStore.language.set(languages[0].value, setLanguage);
    }
  }, []);

  return <Select value={language} items={languages} onSelectItem={handleSelect} />;
}

export default SelectLanguage;
