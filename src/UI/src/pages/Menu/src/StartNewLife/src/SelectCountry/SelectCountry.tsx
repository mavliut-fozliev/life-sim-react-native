import React, {useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {StyleSheet} from 'react-native';
import {getLocalizedText} from '../../../../../../../../locales/getLocalizedText ';
import {countries} from './consts';
import {newLifeStore} from '../../../../../../../../storage/store';
import {DispatchString} from '../../../../../../../../types/common';
import {getRandomArrayItem} from '../../../../../../../../utils/common';

type SelectCountryProps = {
  country: string;
  setCountry: DispatchString;
  clearCity: () => void;
};

function SelectCountry({country, setCountry, clearCity}: SelectCountryProps) {
  const countryLabels = getLocalizedText().menu.countries;

  const localizedCountries: SelectItem[] = countries.map(c => ({
    ...c,
    label: c.label + countryLabels[c.value],
    containerStyle: Object.assign(c.containerStyle!, {height: 50}),
  }));

  const [items, setItems] = useState<SelectItem[]>(localizedCountries);

  const randomCountry = getRandomArrayItem(localizedCountries).value;

  useEffect(() => {
    const savedCountry = newLifeStore.country.get();
    if (savedCountry) {
      setCountry(savedCountry);
    } else {
      setCountry(randomCountry);
    }
  }, [randomCountry, setCountry]);

  function onChange(value: string) {
    newLifeStore.country.set(value, setCountry);
    clearCity();
  }

  return (
    <Select
      value={country}
      setValue={setCountry}
      onChange={onChange}
      items={items}
      setItems={setItems}
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

export default SelectCountry;
