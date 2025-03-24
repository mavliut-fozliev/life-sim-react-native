import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
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
  const savedLanguage = settingsStore.language.get();
  const [language, setLanguage] = useState(savedLanguage || languages[0].value);

  const [items, setItems] = useState<SelectItem[]>(languages);

  useEffect(() => {
    if (!settingsStore.language.get()) {
      settingsStore.language.set(languages[0].value, setLanguage);
    }
  }, []);

  return (
    <Select
      value={language}
      setValue={setLanguage}
      onChange={v => settingsStore.language.set(v, setLanguage)}
      items={items}
      setItems={setItems}
      labelStyle={styles.label}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectLanguage;
