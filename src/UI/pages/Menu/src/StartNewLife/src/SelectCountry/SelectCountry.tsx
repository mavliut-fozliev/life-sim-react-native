import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {countries} from './src/consts';
import {getRandomArrayItem, safestr} from '../../../../../../../utils/common';
import useStore from '../store';
import useGlobalStore from '../../../../../../../storage/store';

function SelectCountry() {
  const {country, $country, $city} = useStore();

  const {localizedText} = useGlobalStore();
  const [items, setItems] = useState<SelectItem[]>([]);

  useEffect(() => {
    const countryLabels = localizedText?.menu?.countries;

    const localizedCountries: SelectItem[] = countries.map(c => ({
      ...c,
      label: c.label + safestr(countryLabels?.[c.value]),
    }));

    setItems(localizedCountries);

    if (!country) {
      const randomCountry = getRandomArrayItem(localizedCountries)?.value;
      if (randomCountry) {
        $country.set(randomCountry);
      }
    }
  }, [country, $country, localizedText]);

  function handleSelectItem(value: string) {
    $country.set(value);
    clearCity();
  }

  function clearCity() {
    $city.set('');
  }

  return <Select value={country} onSelectItem={handleSelectItem} items={items} />;
}

export default SelectCountry;
