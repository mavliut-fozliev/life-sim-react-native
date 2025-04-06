import React from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';
import useGlobalStore from '../../../../../../../storage/store';
import {safestr} from '../../../../../../../utils/common';

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
  const {localizedText} = useGlobalStore();
  const {language, $language} = useGlobalStore();

  const localizeText = useLocalizeText();

  function handleSelect(v: string) {
    $language.set(v);
    localizeText(v);
  }

  return (
    <Select
      value={language}
      items={languages}
      onSelectItem={handleSelect}
      label={safestr(localizedText?.menu?.settings?.language)}
    />
  );
}

export default SelectLanguage;
