import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {countries} from './consts';
import {getLocalizedText} from '../../../../../../../locales/getLocalizedText ';
import {DispatchString} from '../../../../../../../types/common';
import {newLifeStore} from '../../../../../../../storage/store';
import {getRandomArrayItem} from '../../../../../../../utils/common';

type SelectCountryProps = {
  country: string;
  setCountry: DispatchString;
  clearCity: () => void;
};

function SelectCountry({country, setCountry, clearCity}: SelectCountryProps) {
  const [items, setItems] = useState<SelectItem[]>([]);

  useEffect(() => {
    const countryLabels = getLocalizedText().menu.countries;
    const localizedCountries: SelectItem[] = countries.map(c => ({
      ...c,
      label: c.label + countryLabels[c.value],
    }));

    setItems(localizedCountries);

    const savedCountry = newLifeStore.country.get();
    if (savedCountry) {
      setCountry(savedCountry);
    } else {
      const randomCountry = getRandomArrayItem(localizedCountries).value;
      newLifeStore.country.set(randomCountry, setCountry);
    }
  }, [setCountry]);

  function handleSelectItem(value: string) {
    newLifeStore.country.set(value, setCountry);
    clearCity();
  }

  return <Select value={country} onSelectItem={handleSelectItem} items={items} />;
}

export default SelectCountry;
