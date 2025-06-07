import React, {useEffect} from 'react';
import {getRandomArrayItem} from '../../../../shared/utils/common';
import useStore from '../store';
import {useCountryItems} from './src/useCountryItems';
import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import Select from '../../../../shared/ui/components/Select/Select';

function SelectCountry() {
  const {country, $country, $city} = useStore();

  const countryItems = useCountryItems();
  const {translate} = useLocalizeText();

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

  return <Select value={country} onSelectItem={handleSelectItem} items={countryItems} label={translate('Country')} />;
}

export default SelectCountry;
