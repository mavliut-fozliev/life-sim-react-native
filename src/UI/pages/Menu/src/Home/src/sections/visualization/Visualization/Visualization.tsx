import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function Visualization() {
  return (
    <View style={styles.box}>
      <Image source={require('../../../../../../../../../assets/images/face3.png')} style={styles.face} />
      <Image source={require('../../../../../../../../../assets/images/eyes2.png')} style={styles.eyes} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,0,255,0.2)',
    height: 300,
  },
  face: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  eyes: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 10,
    left: 0,
  },
});

export default Visualization;
