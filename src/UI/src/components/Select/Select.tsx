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
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange?: (value: string) => void;
  items: SelectItem[];
  setItems: Dispatch<SetStateAction<SelectItem[]>>;
  onSelectItem?: (item: SelectedItem) => void;
  placeholder?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

function Select({
  value,
  setValue,
  onChange,
  items,
  setItems,
  onSelectItem,
  placeholder,
  labelStyle,
  style,
}: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <View>
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
        labelStyle={labelStyle}
        listItemLabelStyle={labelStyle}
        style={style}
      />
    </View>
  );
}

export default Select;
