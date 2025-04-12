import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import useStore from '../store';
import useGlobalStore from '../../../../../../../storage/store';
import {safestr} from '../../../../../../../utils/common';
import {places} from '../../../../../../../consts/places';

function SelectCity() {
  const {city, $city, country} = useStore();

  const {localizedText} = useGlobalStore();
  const menuText = localizedText.menu;

  const [items, setItems] = useState<SelectItem[]>([]);

  function handleSelect(v: string) {
    $city.set(v);
  }

  useEffect(() => {
    const localizedCities: SelectItem[] = Object.keys(places[country]?.cities || {}).map(key => {
      return {
        label: safestr(menuText?.cities[country]?.[key]),
        value: key,
      };
    });

    setItems(localizedCities);
  }, [country, menuText]);

  return (
    <Select
      value={city}
      onSelectItem={handleSelect}
      items={items}
      placeholder={menuText?.cityPlaceholder}
      label={safestr(localizedText?.menu?.newLifeInputs?.city)}
    />
  );
}

export default SelectCity;
