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
  const savedLanguage = settingsStore.language.get() || languages[0].value;
  const [language, setLanguage] = useState(savedLanguage);

  const [items, setItems] = useState<SelectItem[]>(languages);

  useEffect(() => {
    settingsStore.language.set(savedLanguage, setLanguage);
  }, [savedLanguage]);

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
