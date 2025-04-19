import React from 'react';
import Interaction from './src/Interaction';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';

function Intercations() {
  return (
    <ScrollView style={styles.box}>
      <Interaction />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Intercations;
