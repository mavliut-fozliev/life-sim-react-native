import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {getLocalizedText} from '../../../../locales/getLocalizedText ';
import {DispatchString} from '../../../../types/common';
import Button from '../Button/Button';
import {colors, fontSizes} from '../../../../consts/styles';

type ModalTextInputProps = {
  value: string;
  setValue: DispatchString;
  onSave: (value: string, dispatch: DispatchString) => void;
  placeholder?: string;
};

const ModalTextInput = ({value, setValue, onSave, placeholder}: ModalTextInputProps) => {
  const localizedText = getLocalizedText().common;

  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [modalVisible]);

  function handlePress() {
    setModalVisible(true);
    setInputText(value);
  }

  function handleSave() {
    onSave(inputText, setValue);
    setModalVisible(false);
  }

  function handleCancel() {
    setModalVisible(false);
  }

  return (
    <View>
      <Pressable onPress={handlePress}>
        <View style={styles.textContainer}>
          {value ? (
            <Text numberOfLines={1} style={styles.text}>
              {value}
            </Text>
          ) : (
            <Text numberOfLines={1} style={styles.placeholder}>
              {placeholder || localizedText.emptyTextInput}
            </Text>
          )}
        </View>
      </Pressable>

      <Modal visible={modalVisible} animationType="fade" transparent>
        <TouchableOpacity activeOpacity={1} onPress={handleCancel} style={styles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}>
            <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                autoFocus={true}
              />
              <View style={styles.button}>
                <Button label={localizedText.buttons.save} onPress={handleSave} />
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  keyboardAvoidingView: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: fontSizes.medium,
    fontWeight: 600,
  },
  button: {
    display: 'flex',
    width: '100%',
  },
});

export default ModalTextInput;
