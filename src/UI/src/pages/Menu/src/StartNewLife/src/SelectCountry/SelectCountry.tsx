import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Select, {SelectItem} from '../../../../../../components/Select/Select';
import {StyleSheet} from 'react-native';
import {getLocalizedText} from '../../../../../../../../locales/getLocalizedText ';
import {countries} from './consts';
import {newLifeStore} from '../../../../../../../../storage/store';
import {ObjectRecord} from '../../../../../../../../types/common';

type SelectCountryProps = {
  setAvailableCities: Dispatch<SetStateAction<ObjectRecord<string>>>;
};

function SelectCountry({setAvailableCities}: SelectCountryProps) {
  const localizedText = getLocalizedText().menu;
  const countryLabels = localizedText.countries;

  const localizedCountries: SelectItem[] = countries.map(country => {
    return {
      ...country,
      label: country.label + countryLabels[country.value],
      containerStyle: Object.assign(country.containerStyle!, {height: 50}),
    };
  });

  const savedCountry = newLifeStore.country.get() || getRandomCountry(countryLabels, localizedCountries);
  const [country, setCountry] = useState(savedCountry);

  const [items, setItems] = useState<SelectItem[]>(localizedCountries);

  useEffect(() => {
    newLifeStore.country.set(savedCountry, setCountry);
  }, [savedCountry]);

  function onChange(value: string) {
    newLifeStore.country.set(value, setCountry);

    const allCountryCities = localizedText.cities;
    setAvailableCities(allCountryCities[value] || {});
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

const getRandomCountry = (countryLabels: ObjectRecord<string>, localizedCountries: SelectItem[]) => {
  const randomCountryIndex = Math.floor(Math.random() * Object.values(countryLabels).length);
  return localizedCountries[randomCountryIndex].value;
};
