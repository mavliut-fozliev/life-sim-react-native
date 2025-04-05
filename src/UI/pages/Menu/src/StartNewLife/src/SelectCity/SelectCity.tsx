import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import useStore from '../store';
import useGlobalStore from '../../../../../../../storage/store';
import {safestr} from '../../../../../../../utils/common';

function SelectCity() {
  const {city, $city, country} = useStore();

  const {localizedText} = useGlobalStore();
  const menuText = localizedText.menu;

  const [items, setItems] = useState<SelectItem[]>([]);

  function handleSelect(v: string) {
    $city.set(v);
  }

  useEffect(() => {
    const localizedCities: SelectItem[] = Object.entries(menuText?.cities[country] || {}).map(([key, value]) => ({
      label: safestr(value),
      value: key,
    }));

    setItems(localizedCities);
  }, [country, menuText]);

  return <Select value={city} onSelectItem={handleSelect} items={items} placeholder={menuText?.cityPlaceholder} />;
}

export default SelectCity;
