import React, {useMemo} from 'react';
import {DimensionValue, Image, StyleSheet, View, ViewStyle} from 'react-native';

type TestCarProps = {
  size: DimensionValue;
  style?: ViewStyle;
};

const assetPath = '../../../../../../../../../assets/images/cars/car2.png';

function TestCar({size, style}: TestCarProps) {
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
