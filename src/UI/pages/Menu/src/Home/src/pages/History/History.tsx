import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import useGameStore from '../../../../store/gameStore';

type HistoryProps = {};

function History({}: HistoryProps) {
  const gameStore = useGameStore();

  return (
    <ScrollView style={styles.box}>
      <View style={styles.boxContent}>
        {Object.entries(gameStore.history).map(([age, historyArr], i) => (
          <View key={i.toString()}>
            <View style={styles.age}>
              <Text style={styles.ageText}>Age: {age}</Text>
            </View>
            <View style={styles.content}>
              {historyArr.map((historyItem, ii) => (
                <Text key={ii.toString()}>{historyItem}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
  boxContent: {
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
    gap: 30,
  },
  age: {},
  ageText: {
    fontWeight: 500,
  },
  content: {
    marginTop: 10,
    gap: 10,
  },
});

export default History;
