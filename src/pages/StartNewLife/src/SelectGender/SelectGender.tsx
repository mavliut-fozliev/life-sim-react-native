import React, {useEffect} from 'react';
import {getRandomArrayItem} from '../../../../shared/utils/common';
import useStore from '../store';
import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import {useGenderItems} from './src/useGenderItems';
import Select from '../../../../shared/ui/components/Select/Select';

function SelectGender() {
  const {gender, $gender} = useStore();
  const {translate} = useLocalizeText();

  const genderItems = useGenderItems();

  useEffect(() => {
    if (!gender) {
      const randomGender = getRandomArrayItem(genderItems)?.value;
      if (randomGender) {
        $gender.set(randomGender);
      }
    }
  }, [gender, $gender, genderItems]);

  function handleSelectItem(value: string) {
    $gender.set(value);
  }

  return <Select value={gender} onSelectItem={handleSelectItem} items={genderItems} label={translate('Gender')} />;
}

export default SelectGender;
