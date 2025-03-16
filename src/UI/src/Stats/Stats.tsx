import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Stats() {
  return (
    <View style={styles.box}>
      <Text>Stats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    height: 160,
  },
});

export default Stats;
