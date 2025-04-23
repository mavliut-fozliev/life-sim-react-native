import React, {useMemo} from 'react';
import {DimensionValue, Image, StyleSheet, View, ViewStyle} from 'react-native';
import {SpriteEras, SpriteVariants} from '../../../../../../../../../types/people';

type AdultProps = {
  size: DimensionValue;
  style?: ViewStyle;
} & SpriteVariants[SpriteEras.adult];

const assetPath = '../../../../../../../../../assets/images/character/adult/';

function Adult({size, legs, body, head, eyes, mouth, hair, style}: AdultProps) {
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        box: {
          width: size,
          height: size,
          ...style,
        },
      }),
    [size, style],
  );

  const legsVariants = {
    light: require(assetPath + 'legs/legs.png'),
  };
  const bodyVariants = {
    light: require(assetPath + 'body/body_1.png'),
    dark: require(assetPath + 'body/body_2.png'),
  };
  const headVariants = {
    light: require(assetPath + 'head/head_1.png'),
    dark: require(assetPath + 'head/head_2.png'),
  };
  const eyesVariants = {
    black: require(assetPath + 'eyes/eyes.png'),
  };
  const mouthVariants = {
    smile: require(assetPath + 'mouth/mouth.png'),
  };
  const hairVariants = {
    average: require(assetPath + 'hair/hair_1.png'),
  };

  return (
    <View style={dynamicStyles.box}>
      {legs && <Image source={legsVariants[legs]} style={styles.image} />}
      {body && <Image source={bodyVariants[body]} style={styles.image} />}
      <Image source={headVariants[head]} style={styles.image} />
      <Image source={eyesVariants[eyes]} style={styles.image} />
      <Image source={mouthVariants[mouth]} style={styles.image} />
      {hair && <Image source={hairVariants[hair]} style={styles.image} />}
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

export default Adult;
