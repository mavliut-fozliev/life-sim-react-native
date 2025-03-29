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
      containerStyle: {height: 50},
    }));

    setItems(localizedCities);
  }, [country, localizedText]);

  return (
    <Select
      value={city}
      setValue={setCity}
      onChange={v => newLifeStore.city.set(v, setCity)}
      items={items}
      setItems={setItems}
      placeholder={localizedText.cityPlaceholder}
    />
  );
}

export default SelectCity;
