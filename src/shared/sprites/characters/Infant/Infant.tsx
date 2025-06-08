import React, {useMemo} from 'react';
import {DimensionValue, Image, StyleSheet, View, ViewStyle} from 'react-native';
import {SpriteVariants} from '../../../types/people';
import {SpriteEras} from '../../../../features/character/characterProps';

type InfantProps = {
  size: DimensionValue;
  style?: ViewStyle;
} & SpriteVariants[SpriteEras.infant];

const assetPath = '../../../assets/images/character/infant/';

function Infant({size, body, eyes, mouth, style}: InfantProps) {
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

  const bodyVariants = {
    light: require(assetPath + 'body/body_1.png'),
    dark: require(assetPath + 'body/body_1.png'),
  };
  const eyesVariants = {
    black: require(assetPath + 'eyes/eyes_1.png'),
  };
  const mouthVariants = {
    smile: require(assetPath + 'mouth/mouth_1.png'),
  };

  return (
    <View style={[dynamicStyles.box, style]}>
      <Image source={bodyVariants[body]} style={styles.image} />
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
