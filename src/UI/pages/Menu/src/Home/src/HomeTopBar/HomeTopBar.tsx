import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Resource from '../Resource/Resource';
import {fontSizes} from '../../../../../../../consts/styles';
import usePlayerStore from '../../../playerStore';

function HomeTopBar() {
  const playerStore = usePlayerStore();

  return (
    <View style={styles.contentBox}>
      <Text numberOfLines={1} style={styles.name}>
        {playerStore.name} {playerStore.surname}
      </Text>
      <Resource name="energy" value={12} />
      <Resource name="money" value={34} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  name: {
    fontSize: fontSizes.large,
  },
});

export default HomeTopBar;
