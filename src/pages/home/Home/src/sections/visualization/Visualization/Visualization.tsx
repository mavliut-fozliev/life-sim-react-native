import React from 'react';
import {ImageBackground, StyleSheet, View, ViewStyle} from 'react-native';
import {usePeopleConnections} from '../../../../../../../shared/hooks/usePeopleConnections';
import {SpriteName, useSprite} from '../../../../../../../shared/sprites/hooks/useSprite';

function Visualization() {
  const {getSprite, getPersonSprite} = useSprite();
  const {findExactRoles} = usePeopleConnections();

  const exactRoles = findExactRoles();

  const fatherData = exactRoles.Father;
  const motherData = exactRoles.Mother;

  const player = getSprite(SpriteName.player, 150);
  const father = fatherData ? getPersonSprite(fatherData.person, 90, {position: 'absolute', top: 20, left: 40}) : <></>;
  const mother = motherData ? getPersonSprite(motherData.person, 90, {position: 'absolute', top: 20}) : <></>;
  const home = getSprite(SpriteName.home, 200, {bottom: 10});
  const car = getSprite(SpriteName.car, 180, {top: 5});
  const aircraft = getSprite(SpriteName.aircraft, 160, {bottom: 0, right: 10});

  const back = require('../../../../../../../shared/assets/images/background/sun.jpg');

  return (
    <View style={styles.box}>
      <ImageBackground source={back} style={styles.background}>
        {/* <View style={styles.homeShell}>{home}</View> */}
        {/* <View style={styles.carShell}>{car}</View> */}
        {/* <View style={styles.aircraftShell}>{aircraft}</View> */}
        <View style={styles.familyShell}>
          <View>{mother}</View>
          <View>{father}</View>
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
  aircraftShell: {
    ...shellStyles,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
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
