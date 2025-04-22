import React from 'react';
import {ImageBackground, StyleSheet, View, ViewStyle} from 'react-native';
import {SpriteName, useSprite} from '../../../sprites/useSprite';

function Visualization() {
  const {getSprite} = useSprite();

  const player = getSprite(SpriteName.player, 150);
  const mother = getSprite(SpriteName.mother, 100, true);
  const father = getSprite(SpriteName.father, 100, true);
  const home = getSprite(SpriteName.home, '70%', true);
  const car = getSprite(SpriteName.car, 200, true);

  const back = require('../../../../../../../../../assets/images/background/sun.jpg');

  return (
    <View style={styles.box}>
      <ImageBackground source={back} style={styles.background}>
        <View style={styles.homeShell}>{home}</View>
        <View style={styles.carShell}>{car}</View>
        <View style={styles.familyShell}>
          <View>{father}</View>
          <View style={styles.mother}>{mother}</View>
        </View>
        <View style={styles.mainShell}>{player}</View>
      </ImageBackground>
    </View>
  );
}

const shellStyles: ViewStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  box: {
    height: 300,
  },
  homeShell: {
    ...shellStyles,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carShell: {
    ...shellStyles,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
});

export default Visualization;
