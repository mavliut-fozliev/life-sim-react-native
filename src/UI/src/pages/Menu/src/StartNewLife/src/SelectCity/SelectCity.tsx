import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {getLocalizedText} from '../../../../../../../../locales/getLocalizedText ';
import {newLifeStore} from '../../../../../../../../storage/store';
import {DispatchString} from '../../../../../../../../types/common';

type SelectCityProps = {
  city: string;
  setCity: DispatchString;
  country: string;
};

function SelectCity({city, setCity, country}: SelectCityProps) {
  const localizedText = getLocalizedText().menu;

  const [items, setItems] = useState<SelectItem[]>([]);

  function handleSelect(v: string) {
    newLifeStore.city.set(v, setCity);
  }

  useEffect(() => {
    const savedCity = newLifeStore.city.get();
    if (savedCity) {
      setCity(savedCity);
    }
  }, [setCity]);

  useEffect(() => {
    const localizedCities: SelectItem[] = Object.entries(localizedText.cities[country] || {}).map(([key, value]) => ({
      label: value,
      value: key,
    }));

    setItems(localizedCities);
  }, [country, localizedText]);

  return <Select value={city} onSelectItem={handleSelect} items={items} placeholder={localizedText.cityPlaceholder} />;
}

export default SelectCity;
