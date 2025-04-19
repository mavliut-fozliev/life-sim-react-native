import React, {useMemo} from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';

type LegsVariants = 'light';
type BodyVariants = 'light' | 'dark';
type HeadVariants = 'light' | 'dark';
type EyesVariants = 'black';
type MouthVariants = 'smile';
type HairVariants = 'average';

type AdultProps = {
  size: number;
  head: HeadVariants;
  eyes: EyesVariants;
  mouth: MouthVariants;
  legs?: LegsVariants;
  body?: BodyVariants;
  hair?: HairVariants;
  style?: ViewStyle;
  relative?: boolean;
};

const assetPath = '../../../../../../../../../assets/images/character/adult/';

function Adult({size, legs, body, head, eyes, mouth, hair, style, relative}: AdultProps) {
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        box: {
          position: relative ? 'relative' : 'absolute',
          width: size,
          height: size,
        },
      }),
    [size, relative],
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
    <View style={[dynamicStyles.box, style]}>
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
