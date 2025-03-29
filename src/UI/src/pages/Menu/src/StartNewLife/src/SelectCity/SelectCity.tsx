import React, {useEffect, useMemo, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {StyleSheet} from 'react-native';
import {getLocalizedText} from '../../../../../../../../locales/getLocalizedText ';
import {newLifeStore} from '../../../../../../../../storage/store';
import {ObjectRecord} from '../../../../../../../../types/common';

type SelectCityProps = {
  availableCities: ObjectRecord<string>;
};

function SelectCity({availableCities}: SelectCityProps) {
  const localizedText = getLocalizedText().menu;

  const localizedCities: SelectItem[] = useMemo(
    () =>
      Object.entries(availableCities).map(([key, value]) => {
        return {
          label: value,
          value: key,
          containerStyle: {height: 50},
        };
      }),
    [availableCities],
  );

  const savedCity = newLifeStore.city.get() || '';
  const [city, setCity] = useState(savedCity);

  const [items, setItems] = useState<SelectItem[]>(localizedCities);
  useEffect(() => {
    newLifeStore.city.set('', setCity);
    setItems(localizedCities);
  }, [localizedCities]);

  useEffect(() => {
    newLifeStore.city.set(savedCity, setCity);
  }, [savedCity]);

  return (
    <Select
      value={city}
      setValue={setCity}
      onChange={v => newLifeStore.city.set(v, setCity)}
      items={items}
      setItems={setItems}
      placeholder={localizedText.cityPlaceholder}
      labelStyle={styles.label}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectCity;
