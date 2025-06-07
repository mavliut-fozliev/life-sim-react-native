import React from 'react';
import useStore from '../store';
import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import {useCityItems} from './src/useCityItems';
import Select from '../../../../shared/ui/components/Select/Select';

function SelectCity() {
  const {city, $city} = useStore();
  const {translate} = useLocalizeText();

  const cityItems = useCityItems();

  function handleSelect(v: string) {
    $city.set(v);
  }

  return (
    <Select
      value={city}
      onSelectItem={handleSelect}
      items={cityItems}
      placeholder={translate('Select Сity')}
      label={translate('City')}
    />
  );
}

export default SelectCity;
