import React, {useMemo} from 'react';
import {DimensionValue, Image, StyleSheet, View} from 'react-native';

type TestCarProps = {
  size: DimensionValue;
  absolute?: boolean;
};

const assetPath = '../../../../../../../../../assets/images/cars/car.png';

function TestCar({size, absolute}: TestCarProps) {
  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        box: {
          position: absolute ? 'absolute' : 'relative',
          width: size,
          height: size,
        },
      }),
    [size, absolute],
  );

  return (
    <View style={dynamicStyles.box}>
      <Image source={require(assetPath)} style={styles.image} />
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

export default TestCar;
