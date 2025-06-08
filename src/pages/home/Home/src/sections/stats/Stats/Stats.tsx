import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stat from './src/Stat/Stat';
import {findMatchingKeyByMaxNumber} from '../../../../../../../shared/utils/common';
import {useLocalizeText} from '../../../../../../../shared/locales/useLocalizeText';
import {PlayerMood, playerMoodMap} from '../../../../../../../features/character/mood';
import {usePlayer} from '../../../../../../../features/character/hooks/usePlayer';

function Stats() {
  const player = usePlayer();
  const {translate} = useLocalizeText();

  const mood = findMatchingKeyByMaxNumber(playerMoodMap, player.mood) ?? PlayerMood.Neutral;

  return (
    <View style={styles.box}>
      <View>
        <Stat name="age" value={player.age} />
      </View>
      <View>
        <Stat name="health" value={player.health} />
        <Stat name="power" value={player.power} />
        <Stat name="charm" value={player.charm} />
      </View>
      <View>
        <Text>Состояние: {translate(mood)}</Text>
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
