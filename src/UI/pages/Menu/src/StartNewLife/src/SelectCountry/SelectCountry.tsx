import React, {useEffect} from 'react';
import Select from '../../../../../../components/Select/Select';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import useStore from '../store';
import {useCountryItems} from './src/useCountryItems';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';

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
