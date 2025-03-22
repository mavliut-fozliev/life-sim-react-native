import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/Button/Button';

function Menu() {
  return (
    <View style={styles.box}>
      <Button label="Start New Life!" onPress={() => console.log('start')} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    height: 660,
  },
});

export default Menu;
