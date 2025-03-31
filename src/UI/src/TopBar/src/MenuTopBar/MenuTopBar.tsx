import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontSizes} from '../../../../../consts/styles';

function MenuTopBar() {
  return (
    <View style={styles.box}>
      <Text numberOfLines={1} style={styles.title}>
        Life Simulator
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
});

export default MenuTopBar;
