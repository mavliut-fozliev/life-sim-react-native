import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import useGameStore from '../../../../store/gameStore';

type HistoryProps = {};

function History({}: HistoryProps) {
  const gameStore = useGameStore();

  return (
    <ScrollView style={styles.box}>
      {Object.entries(gameStore.history).map(([age, historyArr], i) => (
        <View key={i.toString()}>
          <Text>{age}</Text>
          {historyArr.map((historyItem, ii) => (
            <Text key={ii.toString()}>{historyItem}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default History;
