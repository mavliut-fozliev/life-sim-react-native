import React from 'react';
import Select from '../../../../../../components/Select/Select';
import useStore from '../store';
import {useLocalizeText} from '../../../../../../../locales/useLocalizeText';
import {useCityItems} from './src/useCityItems';

function SelectCity() {
  const {city, $city} = useStore();
  const {getText} = useLocalizeText();

  const cityItems = useCityItems();

  function handleSelect(v: string) {
    $city.set(v);
  }

  return (
    <Select
      value={city}
      onSelectItem={handleSelect}
      items={cityItems}
      placeholder={getText(['menu', 'input', 'Select Сity'])}
      label={getText(['menu', 'newLifeInputs', 'City'])}
    />
  );
}

export default SelectCity;
