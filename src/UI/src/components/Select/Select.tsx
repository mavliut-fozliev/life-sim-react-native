import React, {useState} from 'react';
import {ItemType} from 'react-native-dropdown-picker';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';
import {colors, fontSizes} from '../../../../consts/styles';
import Radio from '../../../../icons/Radio';
import {getLocalizedText} from '../../../../locales/getLocalizedText ';

export type SelectItem = {
  label: string;
  value: string;
  icon?: () => React.JSX.Element;
  color?: string;
  backgroundColor?: string;
};

export type SelectedItem = ItemType<string>;

type SelectProps = {
  value: string;
  items: SelectItem[];
  onSelectItem: (item: string) => void;
  placeholder?: string;
};

function Select({value, items, onSelectItem, placeholder = ''}: SelectProps) {
  const localizedText = getLocalizedText().common.emptySelectItems;
  const [modalVisible, setModalVisible] = useState(false);

  const noItems = items.length === 0;
  const selectedLabel = items.find(i => i.value === value)?.label;

  function handlePress() {
    if (noItems) {
      return;
    }
    setModalVisible(true);
  }

  function handleSelect(selectedValue: string) {
    onSelectItem(selectedValue);
    setModalVisible(false);
  }

  function handleCancel() {
    setModalVisible(false);
  }

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={handlePress} delayPressIn={0}>
        <View style={styles.textContainer}>
          {selectedLabel ? (
            <Text numberOfLines={1} style={styles.text}>
              {selectedLabel}
            </Text>
          ) : (
            <Text numberOfLines={1} style={styles.placeholder}>
              {noItems ? localizedText : placeholder}
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent>
        <TouchableOpacity activeOpacity={1} onPress={handleCancel} style={styles.modalBox}>
          <View style={styles.modalContent}>
            {items.map(item => (
              <TouchableOpacity activeOpacity={0.2} onPress={() => handleSelect(item.value)} key={item.value}>
                <View style={{...styles.itemBox, backgroundColor: item.backgroundColor}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={{...styles.item, color: item.color}}>
                    {item.label}
                  </Text>
                  <Radio size={30} selected={item.value === value} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.border.secondary,
    backgroundColor: '#FFF',
  },
  text: {fontSize: fontSizes.medium, fontWeight: 600},
  placeholder: {fontSize: fontSizes.medium, fontWeight: 600, opacity: 0.3},
  modalBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  itemBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: colors.border.primary,
  },
  item: {
    width: '90%',
    fontSize: fontSizes.large,
  },
});

export default Select;
