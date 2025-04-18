import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
      <View style={styles.row}>
        <View style={styles.cell}>
          <Image source={require(assetPath + 'cars/car.png')} style={styles.image} />
        </View>
        <View style={styles.cell}>
          <View style={styles.character}>
            <Image source={require(adult + 'body/body_1.png')} style={styles.image} />
            <Image source={require(adult + 'legs/legs.png')} style={styles.image} />
            <Image source={require(adult + 'head/head_1.png')} style={styles.image} />
            <Image source={require(adult + 'hair/hair_1.png')} style={styles.image} />
            <Image source={require(adult + 'eyes/eyes.png')} style={styles.image} />
            <Image source={require(adult + 'mouth/mouth.png')} style={styles.image} />
          </View>
        </View>
        <View style={styles.cell}>
          <View style={styles.character}>
            <Image source={require(adult + 'body/body_1.png')} style={styles.image} />
            <Image source={require(adult + 'legs/legs.png')} style={styles.image} />
            <Image source={require(adult + 'head/head_1.png')} style={styles.image} />
            <Image source={require(adult + 'eyes/eyes.png')} style={styles.image} />
            <Image source={require(adult + 'mouth/mouth.png')} style={styles.image} />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}>
          <View style={styles.character}>
            <Image source={require(infant + 'body/body_1.png')} style={styles.image} />
            <Image source={require(infant + 'legs/legs_1.png')} style={styles.image} />
            <Image source={require(infant + 'head/head_1.png')} style={styles.image} />
            <Image source={require(infant + 'eyes/eyes_1.png')} style={styles.image} />
            <Image source={require(infant + 'mouth/mouth_1.png')} style={styles.image} />
          </View>
        </View>
        <View style={styles.cell}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,0,255,0.2)',
    height: 300,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
  },
  cell: {
    flex: 1,
  },
  character: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Visualization;
