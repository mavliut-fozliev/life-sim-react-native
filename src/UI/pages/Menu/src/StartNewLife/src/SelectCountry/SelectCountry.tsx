import React, {useEffect} from 'react';
import Select from '../../../../../../components/Select/Select';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import useStore from '../store';
import useGlobalStore from '../../../../../../../storage/store';
import {useCountryItems} from './src/useCountryItems';

function SelectCountry() {
  const {country, $country, $city} = useStore();
  const countryItems = useCountryItems();

  const {localizedText} = useGlobalStore();

  useEffect(() => {
    if (!country) {
      const randomCountry = getRandomArrayItem(countryItems)?.value;
      if (randomCountry) {
        $country.set(randomCountry);
      }
    }
  }, [country, $country, countryItems]);

  function handleSelectItem(value: string) {
    $country.set(value);
    clearCity();
  }

  function clearCity() {
    $city.set('');
  }

  return (
    <Select
      value={country}
      onSelectItem={handleSelectItem}
      items={countryItems}
      label={localizedText.menu.newLifeInputs.Country}
    />
  );
}

export default SelectCountry;
