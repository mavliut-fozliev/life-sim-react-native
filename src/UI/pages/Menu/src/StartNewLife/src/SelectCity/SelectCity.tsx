import React from 'react';
import Select from '../../../../../../components/Select/Select';
import useStore from '../store';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';
import {useCityItems} from './src/useCityItems';

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
