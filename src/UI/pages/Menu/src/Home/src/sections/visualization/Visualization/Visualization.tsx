import React from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import usePlayerStore from '../../../../../playerStore';

function Visualization() {
  const playerStore = usePlayerStore();

  console.log(playerStore.mother, playerStore.father);

  const assetPath = '../../../../../../../../../assets/images/';
  const characterPath = assetPath + 'character/';
  const adult = characterPath + 'adult/';
  const infant = characterPath + 'infant/';

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
        <View style={styles.father}>
          <Image source={require(adult + 'body/body_1.png')} style={styles.image} />
          <Image source={require(adult + 'legs/legs.png')} style={styles.image} />
          <Image source={require(adult + 'head/head_1.png')} style={styles.image} />
          <Image source={require(adult + 'hair/hair_1.png')} style={styles.image} />
          <Image source={require(adult + 'eyes/eyes.png')} style={styles.image} />
          <Image source={require(adult + 'mouth/mouth.png')} style={styles.image} />
        </View>
        <View style={styles.mother}>
          <Image source={require(adult + 'body/body_1.png')} style={styles.image} />
          <Image source={require(adult + 'legs/legs.png')} style={styles.image} />
          <Image source={require(adult + 'head/head_1.png')} style={styles.image} />
          <Image source={require(adult + 'eyes/eyes.png')} style={styles.image} />
          <Image source={require(adult + 'mouth/mouth.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.mainShell}>
        <View style={styles.character}>
          <Image source={require(infant + 'body/body_1.png')} style={styles.image} />
          <Image source={require(infant + 'legs/legs_1.png')} style={styles.image} />
          <Image source={require(infant + 'head/head_1.png')} style={styles.image} />
          <Image source={require(infant + 'eyes/eyes_1.png')} style={styles.image} />
          <Image source={require(infant + 'mouth/mouth_1.png')} style={styles.image} />
        </View>
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
  father: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  mother: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 50,
  },
  mainShell: {
    ...shellStyles,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  character: {
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Visualization;
