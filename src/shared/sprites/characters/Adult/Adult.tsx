import React, {useMemo} from 'react';
import {DimensionValue, Image, StyleSheet, View, ViewStyle} from 'react-native';
import {SpriteVariants} from '../../../types/people';
import {SpriteEras} from '../../../constants/character/characterProps';

type AdultProps = {
  size: DimensionValue;
  style?: ViewStyle;
} & SpriteVariants[SpriteEras.adult];

const assetPath = '../../../assets/images/character/adult/';

function Adult({size, body, eyes, mouth, hair, style}: AdultProps) {
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

  const bodyVariants = {
    light: require(assetPath + 'body/normal/body_1.png'),
    dark: require(assetPath + 'body/normal/body_1.png'),
  };
  const eyesVariants = {
    black: require(assetPath + 'eyes/eyes_1.png'),
  };
  const mouthVariants = {
    smile: require(assetPath + 'mouth/mouth_1.png'),
  };
  const hairVariants = {
    average: require(assetPath + 'hair/hair_1.png'),
  };

  return (
    <View style={dynamicStyles.box}>
      <Image source={bodyVariants[body]} style={styles.image} />
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
