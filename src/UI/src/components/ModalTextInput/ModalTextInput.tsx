import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import {getLocalizedText} from '../../../../locales/getLocalizedText ';
import {DispatchString} from '../../../../types/common';

type ModalTextInputProps = {
  value: string;
  setValue: DispatchString;
  onSave: (value: string, dispatch: DispatchString) => void;
};

const ModalTextInput = ({value, setValue, onSave}: ModalTextInputProps) => {
  const localizedText = getLocalizedText().common.buttons;

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
          <Text numberOfLines={1} style={styles.text}>
            {value}
          </Text>
        </View>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              ref={inputRef}
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              autoFocus={true}
            />
            <View style={styles.buttonContainer}>
              <Button title={localizedText.cancel} onPress={handleCancel} color={'red'} />
              <Button title={localizedText.save} onPress={handleSave} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
    paddingBottom: 12,
  },
  text: {fontSize: 16, fontWeight: 600},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
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
    fontSize: 16,
    fontWeight: 600,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ModalTextInput;
