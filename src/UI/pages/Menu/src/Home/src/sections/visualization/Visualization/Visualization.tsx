import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function Visualization() {
  return (
    <View style={styles.box}>
      <Image source={require('../../../../../../../../../assets/images/face1.png')} style={styles.image} />
      <Image source={require('../../../../../../../../../assets/images/eyes1.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,0,255,0.2)',
    height: 300,
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Visualization;
