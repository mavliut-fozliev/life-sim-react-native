import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import {Navigation} from '../../../../../../../../types/navigation';

type HistoryProps = {
  navigation: Navigation;
};

function History({navigation}: HistoryProps) {
  return <ScrollView style={styles.box}></ScrollView>;
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default History;
