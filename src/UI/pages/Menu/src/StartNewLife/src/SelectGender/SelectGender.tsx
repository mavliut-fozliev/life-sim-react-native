import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {getLocalizedText} from '../../../../../../../locales/getLocalizedText ';
import {newLifeStore} from '../../../../../../../storage/store';
import {DispatchString} from '../../../../../../../types/common';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import useZustand from '../../../../../../../storage/zustand';

type SelectGenderProps = {
  gender: string;
  setGender: DispatchString;
};

function SelectGender({gender, setGender}: SelectGenderProps) {
  const {language} = useZustand();
  const [items, setItems] = useState<SelectItem[]>([]);

  useEffect(() => {
    const genderLabels = getLocalizedText(language).menu.genders;

    const localizedGenders: SelectItem[] = Object.entries(genderLabels).map(([key, value]) => ({
      label: value,
      value: key,
    }));

    setItems(localizedGenders);

    const savedGender = newLifeStore.gender.get();
    if (savedGender) {
      setGender(savedGender);
    } else {
      const randomGender = getRandomArrayItem(localizedGenders).value;
      newLifeStore.gender.set(randomGender, setGender);
    }
  }, [setGender, language]);

  function handleSelectItem(value: string) {
    newLifeStore.gender.set(value, setGender);
  }

  return <Select value={gender} onSelectItem={handleSelectItem} items={items} />;
}

export default SelectGender;
