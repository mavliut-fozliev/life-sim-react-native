import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TopBar() {
  return (
    <View style={styles.box}>
      <Text>TopBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    height: 40,
  },
});

export default TopBar;
