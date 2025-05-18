import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useGameStore from '../../pages/Menu/src/store/gameStore';
import {useLocalizeText} from '../../../locales/useLocalizeText';
import {fontSizes} from '../../../consts/styles';
import Content from './src/Content/Content';

function PopUpWindow() {
  const gameStore = useGameStore();
  const {translate} = useLocalizeText();

  return (
    <Modal visible={!!gameStore.popUpContent.content} animationType="fade" transparent={true}>
      <TouchableOpacity activeOpacity={1} onPress={() => gameStore.$popUpContent.set({content: ''})}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Content />
            <Text style={styles.content}>{translate('Click anywhere to continue')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  box: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  content: {
    fontSize: fontSizes.small,
    fontWeight: 500,
    marginTop: 20,
  },
});

export default PopUpWindow;
