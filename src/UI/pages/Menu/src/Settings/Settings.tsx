import React from 'react';
import {StyleSheet, View} from 'react-native';
import SelectLanguage from './src/SelectLanguage/SelectLanguage';
import {colors} from '../../../../../consts/styles';

function Settings() {
  return (
    <View style={styles.box}>
      <SelectLanguage />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
    padding: 20,
    height: '100%',
  },
});

export default Settings;
