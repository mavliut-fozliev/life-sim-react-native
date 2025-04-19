import React, {useMemo} from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';

type LegsVariants = 'light';
type BodyVariants = 'light';
type HeadVariants = 'light';
type EyesVariants = 'black';
type MouthVariants = 'smile';

type InfantProps = {
  size: number;
  head: HeadVariants;
  eyes: EyesVariants;
  mouth: MouthVariants;
  legs?: LegsVariants;
  body?: BodyVariants;
  style?: ViewStyle;
};

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
  };
  const headVariants = {
    light: require(assetPath + 'head/head_1.png'),
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
