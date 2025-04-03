import React, {useEffect} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {settingsStore} from '../../../../../../../storage/store';
import useZustand from '../../../../../../../storage/zustand';

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
  const {language, setLanguage} = useZustand();

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
  }, [setLanguage]);

  return <Select value={language} items={languages} onSelectItem={handleSelect} />;
}

export default SelectLanguage;
