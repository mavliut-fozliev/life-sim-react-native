import React, {useMemo} from 'react';
import {DimensionValue, Image, StyleSheet, View, ViewStyle} from 'react-native';
import {SpriteEras, SpriteVariants} from '../../../../../../../../../types/people';

type InfantProps = {
  size: DimensionValue;
  style?: ViewStyle;
} & SpriteVariants[SpriteEras.infant];

const assetPath = '../../../../../../../../../assets/images/character/infant/';

function Infant({size, legs, body, head, eyes, mouth, style}: InfantProps) {
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        box: {
          position: 'absolute',
          width: size,
          height: size,
        },
      }),
    [size],
  );

  const legsVariants = {
    light: require(assetPath + 'legs/legs_1.png'),
  };
  const bodyVariants = {
    light: require(assetPath + 'body/body_1.png'),
    dark: require(assetPath + 'body/body_1.png'),
  };
  const headVariants = {
    light: require(assetPath + 'head/head_1.png'),
    dark: require(assetPath + 'head/head_1.png'),
  };
  const eyesVariants = {
    black: require(assetPath + 'eyes/eyes_1.png'),
  };
  const mouthVariants = {
    smile: require(assetPath + 'mouth/mouth_1.png'),
  };

  return (
    <View style={[dynamicStyles.box, style]}>
      {legs && <Image source={legsVariants[legs]} style={styles.image} />}
      {body && <Image source={bodyVariants[body]} style={styles.image} />}
      <Image source={headVariants[head]} style={styles.image} />
      <Image source={eyesVariants[eyes]} style={styles.image} />
      <Image source={mouthVariants[mouth]} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Infant;
