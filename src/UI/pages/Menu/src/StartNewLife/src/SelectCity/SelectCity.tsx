import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import useStore from '../store';
import useGlobalStore from '../../../../../../../storage/store';
import {cities} from '../../../../../../../consts/citites';

function SelectCity() {
  const {city, $city, country} = useStore();

  const {localizedText} = useGlobalStore();
  const [items, setItems] = useState<SelectItem[]>([]);

  function handleSelect(v: string) {
    $city.set(v);
  }

  useEffect(() => {
    const localizedCities: SelectItem[] = Object.entries(cities[country]).map(([cityKey, cityLabel]) => {
      return {
        label: localizedText.menu.cities[country][cityLabel],
        value: cityKey,
      };
    });

    setItems(localizedCities);
  }, [country, localizedText]);

  return (
    <Select
      value={city}
      onSelectItem={handleSelect}
      items={items}
      placeholder={localizedText.menu['Select Сity']}
      label={localizedText.menu.newLifeInputs.City}
    />
  );
}

export default SelectCity;
