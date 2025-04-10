import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function Visualization() {
  return (
    <View style={styles.box}>
      <View style={styles.character}>
        <Image
          source={require('../../../../../../../../../assets/images/character/body/body_2.png')}
          style={styles.image}
        />
        <Image
          source={require('../../../../../../../../../assets/images/character/legs/legs.png')}
          style={styles.image}
        />
        <Image
          source={require('../../../../../../../../../assets/images/character/head/head_2.png')}
          style={styles.image}
        />
        <Image
          source={require('../../../../../../../../../assets/images/character/hair/hair_1.png')}
          style={styles.image}
        />
        <Image
          source={require('../../../../../../../../../assets/images/character/eyes/eyes.png')}
          style={styles.image}
        />
        <Image
          source={require('../../../../../../../../../assets/images/character/mouth/mouth.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,0,255,0.2)',
    height: 300,
  },
  character: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  image: {
    width: 150,
    height: 150,
    position: 'absolute',
  },
});

export default Visualization;
