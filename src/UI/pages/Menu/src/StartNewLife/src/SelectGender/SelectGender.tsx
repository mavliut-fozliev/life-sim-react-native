import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import useGlobalStore from '../../../../../../../storage/store';
import {getRandomArrayItem, safestr} from '../../../../../../../utils/common';
import useStore from '../store';

function SelectGender() {
  const {gender, $gender} = useStore();

  const {localizedText} = useGlobalStore();
  const [items, setItems] = useState<SelectItem[]>([]);

  useEffect(() => {
    const genderLabels = localizedText?.menu?.genders || {};

    const localizedGenders: SelectItem[] = Object.entries(genderLabels).map(([key, value]) => ({
      label: safestr(value),
      value: key,
    }));

    setItems(localizedGenders);

    if (!gender) {
      const randomGender = getRandomArrayItem(localizedGenders)?.value;
      if (randomGender) {
        $gender.set(randomGender);
      }
    }
  }, [gender, $gender, localizedText]);

  function handleSelectItem(value: string) {
    $gender.set(value);
  }

  return <Select value={gender} onSelectItem={handleSelectItem} items={items} />;
}

export default SelectGender;
