import React from 'react';
import {StyleSheet, View} from 'react-native';
import SelectLanguage from './src/SelectLanguage/SelectLanguage';

function Settings() {
  return (
    <View>
      <View style={styles.language}>
        <SelectLanguage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  language: {
    padding: 10,
  },
});

export default Settings;
