import React, {useCallback, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../shared/constants/styles';
import useGameStore from '../../../shared/store/gameStore';
import {useFocusEffect} from '@react-navigation/native';

type HistoryProps = {};

function History({}: HistoryProps) {
  const gameStore = useGameStore();

  const scrollRef = useRef<ScrollView>(null);

  useFocusEffect(
    useCallback(() => {
      const timeout = setTimeout(() => {
        scrollRef.current?.scrollToEnd({animated: false});
      }, 100);

      return () => clearTimeout(timeout);
    }, []),
  );

  return (
    <ScrollView style={styles.box} ref={scrollRef}>
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
