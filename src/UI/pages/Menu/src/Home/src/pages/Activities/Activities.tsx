import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';

function Activities() {
  return (
    <ScrollView style={styles.box}>
      <SectionButton label="qwrqg" onPress={() => {}} />
      <SectionButton label="efwew" onPress={() => {}} />
      <SectionButton label="rwewfe" onPress={() => {}} />
      <SectionButton label="fwe wfew ef wf" onPress={() => {}} />
      <SectionButton label="wefwef wf w" onPress={() => {}} />
      <SectionButton label="qwrqg" onPress={() => {}} />
      <SectionButton label="13F S" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
    height: '100%',
  },
});

export default Activities;
