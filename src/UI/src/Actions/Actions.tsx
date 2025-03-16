import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Actions() {
  return (
    <View style={styles.box}>
      <Text>Actions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    height: 200,
  },
});

export default Actions;
