import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Visualization() {
  return (
    <View style={styles.box}>
      <Text>Visualization</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'cyan',
    height: 300,
  },
});

export default Visualization;
