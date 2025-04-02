import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

type PageSkeletonProps = PropsWithChildren & {};

function PageSkeleton({children}: PageSkeletonProps) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
  },
});

export default PageSkeleton;
