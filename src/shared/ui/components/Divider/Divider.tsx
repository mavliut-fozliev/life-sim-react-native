import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontSizes} from '../../../constants/styles';

type DividerProps = {
  label: string;
};

function Divider({label}: DividerProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
  },
  label: {
    fontSize: fontSizes.medium,
    fontWeight: 500,
  },
});

export default Divider;
