import React, {Dispatch, SetStateAction, useState} from 'react';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import {View, ViewStyle, StyleProp, TextStyle} from 'react-native';

export type SelectItem = {
  label: string;
  value: string;
  icon?: () => React.JSX.Element;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export type SelectedItem = ItemType<string>;

type SelectProps = {
  onChange: (value: string) => void;
  items: SelectItem[];
  setItems: Dispatch<SetStateAction<SelectItem[]>>;
  onSelectItem?: (item: SelectedItem) => void;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

function Select({onChange, items, setItems, onSelectItem, labelStyle, style}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState('');

  return (
    <View>
      <DropDownPicker
        open={open}
        value={internalValue}
        items={items}
        setOpen={setOpen}
        setValue={setInternalValue}
        onChangeValue={newValue => {
          if (newValue) {
            setInternalValue(newValue);
            onChange(newValue);
          }
        }}
        onSelectItem={onSelectItem}
        setItems={setItems}
        placeholder="Choose language"
        labelStyle={labelStyle}
        listItemLabelStyle={labelStyle}
        style={style}
      />
    </View>
  );
}

export default Select;
