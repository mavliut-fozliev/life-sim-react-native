import React, {useState} from 'react';
import Select, {SelectedItem, SelectItem} from '../../../../../../components/Select/Select';
import {StyleSheet} from 'react-native';
import {getLocalizedText} from '../../../../../../../../locales/getLocalizedText ';

const countries: SelectItem[] = [
  {
    label: ' 🇦🇱  ',
    value: 'ALB',
    containerStyle: {backgroundColor: '#A90B0B'},
    labelStyle: {color: 'white'},
  },
  {
    label: ' 🇷🇺  ',
    value: 'RUS',
    containerStyle: {backgroundColor: '#5F7E94'},
    labelStyle: {color: 'black'},
  },
  {
    label: ' 🇹🇷  ',
    value: 'TUR',
    containerStyle: {backgroundColor: '#A02A2A'},
    labelStyle: {color: 'white'},
  },
  {
    label: ' 🇺🇸  ',
    value: 'USA',
    containerStyle: {backgroundColor: '#2A4D7B'},
    labelStyle: {color: 'white'},
  },
];

function SelectCountry() {
  const localizedCountries: SelectItem[] = countries.map(c => {
    const countyLabels = getLocalizedText().menu.countries;
    return {
      ...c,
      label: c.label + countyLabels[c.value],
      //@ts-ignore
      containerStyle: {...c.containerStyle, height: 50},
    };
  });

  const randomCountryIndex = Math.floor(Math.random() * 4);
  const [country, setCountry] = useState(localizedCountries[randomCountryIndex].value);

  const [items, setItems] = useState<SelectItem[]>(localizedCountries);

  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    labelStyle: localizedCountries[randomCountryIndex].labelStyle,
    containerStyle: localizedCountries[randomCountryIndex].containerStyle,
  });

  return (
    <Select
      value={country}
      setValue={setCountry}
      items={items}
      setItems={setItems}
      onSelectItem={item => setSelectedItem(item)}
      //@ts-ignore
      labelStyle={{...styles.label, ...selectedItem.labelStyle}}
      style={selectedItem.containerStyle}
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
