import React, {useEffect} from 'react';
import Select from '../../../../../../components/Select/Select';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import useStore from '../store';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';
import {useGenderItems} from './src/useGenderItems';

function SelectGender() {
  const {gender, $gender} = useStore();
  const {getText} = useLocalizeText();

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

  return (
    <Select
      value={gender}
      onSelectItem={handleSelectItem}
      items={genderItems}
      label={getText(['menu', 'newLifeInputs', 'Gender'])}
    />
  );
}

export default SelectGender;
