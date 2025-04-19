import React from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import Adult from '../../../sprites/characters/Adult/Adult';
import Infant from '../../../sprites/characters/Infant/Infant';

const assetPath = '../../../../../../../../../assets/images/';

function Visualization() {
  return (
    <View style={styles.box}>
      <View style={styles.homeShell}>
        <View style={styles.home}>
          <Image source={require(assetPath + 'homes/home.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.carShell}>
        <View style={styles.car}>
          <Image source={require(assetPath + 'cars/car.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.familyShell}>
        <Adult size={100} legs="light" body="light" head="light" eyes="black" mouth="smile" hair="average" />
        <Adult size={100} legs="light" body="light" head="light" eyes="black" mouth="smile" style={styles.mother} />
      </View>
      <View style={styles.mainShell}>
        <Infant size={150} legs="light" body="light" head="light" eyes="black" mouth="smile" />
      </View>
    </View>
  );
}

const shellStyles: ViewStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,0,255,0.2)',
    height: 300,
  },
  homeShell: {
    ...shellStyles,
  },
  home: {
    width: '100%',
    height: '100%',
  },
  carShell: {
    ...shellStyles,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  car: {
    height: 200,
    width: 200,
  },
  familyShell: {
    ...shellStyles,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  mother: {
    left: 50,
  },
  mainShell: {
    ...shellStyles,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Visualization;
