import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes} from '../../../../../../../consts/styles';

function TextCover({children}: PropsWithChildren) {
  return <Text style={styles.content}>{children}</Text>;
}

const styles = StyleSheet.create({
  content: {
    fontSize: fontSizes.small,
  },
});

export default TextCover;
