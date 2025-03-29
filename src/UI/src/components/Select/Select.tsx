import React, {Dispatch, SetStateAction, useState} from 'react';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import {ViewStyle, StyleProp, TextStyle, StyleSheet} from 'react-native';
import {DispatchString} from '../../../../types/common';

export type SelectItem = {
  label: string;
  value: string;
  icon?: () => React.JSX.Element;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export type SelectedItem = ItemType<string>;

type SelectProps = {
  value: string;
  setValue: DispatchString;
  onChange?: (value: string) => void;
  items: SelectItem[];
  setItems: Dispatch<SetStateAction<SelectItem[]>>;
  onSelectItem?: (item: SelectedItem) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};

function Select({value, setValue, onChange, items, setItems, onSelectItem, placeholder, style}: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      setValue={setValue}
      items={items}
      setOpen={setOpen}
      onChangeValue={newValue => {
        if (newValue) {
          onChange?.(newValue);
        }
      }}
      onSelectItem={onSelectItem}
      setItems={setItems}
      placeholder={placeholder}
      labelStyle={styles.label}
      listItemLabelStyle={styles.label}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Select;
