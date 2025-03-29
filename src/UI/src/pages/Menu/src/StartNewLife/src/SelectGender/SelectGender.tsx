import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {getLocalizedText} from '../../../../../../../../locales/getLocalizedText ';
import {newLifeStore} from '../../../../../../../../storage/store';
import {DispatchString} from '../../../../../../../../types/common';
import {getRandomArrayItem} from '../../../../../../../../utils/common';

type SelectGenderProps = {
  gender: string;
  setGender: DispatchString;
};

function SelectGender({gender, setGender}: SelectGenderProps) {
  const genderLabels = getLocalizedText().menu.genders;

  const localizedGenders: SelectItem[] = Object.entries(genderLabels).map(([key, value]) => ({
    label: value,
    value: key,
    containerStyle: {height: 50},
  }));

  const [items, setItems] = useState<SelectItem[]>(localizedGenders);

  const randomGender = getRandomArrayItem(localizedGenders).value;

  useEffect(() => {
    const savedGender = newLifeStore.gender.get();
    if (savedGender) {
      setGender(savedGender);
    } else {
      setGender(randomGender);
    }
  }, [randomGender, setGender]);

  return (
    <Select
      value={gender}
      setValue={setGender}
      onChange={v => newLifeStore.gender.set(v, setGender)}
      items={items}
      setItems={setItems}
    />
  );
}

export default SelectGender;
