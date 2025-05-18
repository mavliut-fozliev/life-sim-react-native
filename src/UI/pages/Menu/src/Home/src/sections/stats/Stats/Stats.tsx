import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stat from './src/Stat/Stat';
import usePlayerStore from '../../../../../store/playerStore';
import {PlayerStatus, playerStatusMap} from '../../../../../../../../../consts/character/player';
import {findMatchingKeyByMaxNumber} from '../../../../../../../../../utils/common';
import {useLocalizeText} from '../../../../../../../../../locales/useLocalizeText';

function Stats() {
  const playerStore = usePlayerStore();
  const {translate} = useLocalizeText();

  const status = findMatchingKeyByMaxNumber(playerStatusMap, playerStore.status) || PlayerStatus.Neutral;

  return (
    <View style={styles.box}>
      <View>
        <Stat name="age" value={playerStore.age} />
      </View>
      <View>
        <Stat name="health" value={playerStore.health} />
        <Stat name="power" value={playerStore.power} />
        <Stat name="charm" value={playerStore.charm} />
      </View>
      <View>
        <Text>Состояние: {translate(status)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,0,0,0.2)',
    height: 160,
  },
});

export default Stats;
