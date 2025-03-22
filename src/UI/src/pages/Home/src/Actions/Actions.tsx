import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../../components/Button/Button';

function Actions() {
  return (
    <View style={styles.box}>
      <Button label="history" onPress={() => console.log('some')} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    height: 200,
  },
  button: {
    width: 100,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'cyan',
  },
});

export default Actions;
