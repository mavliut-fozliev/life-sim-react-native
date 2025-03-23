import React, {useState} from 'react';
import Select, {SelectedItem, SelectItem} from '../../../../../../components/Select/Select';
import useZustand from '../../../../../../../../storage/zustand';
import {StyleSheet} from 'react-native';

const countries: SelectItem[] = [
  {
    label: ' 🇷🇺  Russia',
    value: 'RUS',
    containerStyle: {backgroundColor: '#5F7E94'},
    labelStyle: {color: 'black'},
  },
  {
    label: ' 🇹🇷  Turkey',
    value: 'TUR',
    containerStyle: {backgroundColor: '#A02A2A'},
    labelStyle: {color: 'white'},
  },
  {
    label: ' 🇺🇸  United States of America',
    value: 'USA',
    containerStyle: {backgroundColor: '#2A4D7B'},
    labelStyle: {color: 'white'},
  },
];

function SelectCountry() {
  const {newLifeProps, setNewLifeProps} = useZustand();
  const [items, setItems] = useState<SelectItem[]>(countries);
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({labelStyle: {}, containerStyle: {}});

  return (
    <Select
      onChange={value => setNewLifeProps({...newLifeProps, country: value})}
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
