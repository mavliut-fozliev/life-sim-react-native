import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import {colors, fontSizes} from '../../../consts/styles';
import {useLocalizeText} from '../../../locales/useLocalizeText';
import {useIcon} from '../../../icons/useIcon';
import {Icon} from '../../../consts/icons';

export type SelectItem<T extends string = string> = {
  label: string;
  value: T;
  icon?: () => React.JSX.Element;
  color?: string;
  backgroundColor?: string;
};

type SelectProps<T extends string = string> = {
  value: T;
  items: SelectItem<T>[];
  onSelectItem: (value: T) => void;
  label: string;
  placeholder?: string;
};

function RadioIcon({selected}: {selected: boolean}) {
  return useIcon(Icon.Radio, {size: 30, selected});
}

function Select<T extends string = string>({value, items, onSelectItem, label, placeholder = ''}: SelectProps<T>) {
  const {getText} = useLocalizeText();
  const text = getText(['common', 'Nothing here yet']);

  const [modalVisible, setModalVisible] = useState(false);

  const noItems = items.length === 0;
  const selectedLabel = items.find(i => i.value === value)?.label;

  function handlePress() {
    if (noItems) {
      return;
    }
    setModalVisible(true);
  }

  function handleSelect(selectedValue: T) {
    onSelectItem(selectedValue);
    setModalVisible(false);
  }

  function handleCancel() {
    setModalVisible(false);
  }

  return (
    <View>
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
      <TouchableOpacity activeOpacity={0.4} onPress={handlePress} delayPressIn={0}>
        <View style={styles.textContainer}>
          {selectedLabel ? (
            <Text numberOfLines={1} style={styles.text}>
              {selectedLabel}
            </Text>
          ) : (
            <Text numberOfLines={1} style={styles.placeholder}>
              {noItems ? text : placeholder}
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent>
        <TouchableOpacity activeOpacity={1} onPress={handleCancel} style={styles.modalBox}>
          <View style={styles.modalContent}>
            <ScrollView style={styles.scrollView}>
              {items.map(item => (
                <TouchableOpacity activeOpacity={0.2} onPress={() => handleSelect(item.value)} key={item.value}>
                  <View style={{...styles.itemBox, backgroundColor: item.backgroundColor}}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{...styles.item, color: item.color}}>
                      {item.label}
                    </Text>
                    <RadioIcon selected={item.value === value} />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.medium,
    fontWeight: 600,
    color: colors.text.secondary,
    paddingBottom: 6,
  },
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
  scrollView: {
    maxHeight: 600,
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
