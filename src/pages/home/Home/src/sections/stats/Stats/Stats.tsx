import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stat from './src/Stat/Stat';
import usePlayerStore from '../../../../../../../shared/store/playerStore';
import {PlayerMood, playerMoodMap} from '../../../../../../../shared/constants/character/mood';
import {findMatchingKeyByMaxNumber} from '../../../../../../../shared/utils/common';
import {useLocalizeText} from '../../../../../../../shared/locales/useLocalizeText';

function Stats() {
  const playerStore = usePlayerStore();
  const {translate} = useLocalizeText();

  const mood = findMatchingKeyByMaxNumber(playerMoodMap, playerStore.person.mood) ?? PlayerMood.Neutral;

  return (
    <View style={styles.box}>
      <View>
        <Stat name="age" value={playerStore.person.age} />
      </View>
      <View>
        <Stat name="health" value={playerStore.person.health} />
        <Stat name="power" value={playerStore.person.power} />
        <Stat name="charm" value={playerStore.person.charm} />
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
