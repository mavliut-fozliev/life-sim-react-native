import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from './src/TopBar/TopBar';
import Stats from './src/Stats/Stats';
import Visualization from './src/Visualization/Visualization';
import Actions from './src/Actions/Actions';
import {
  loadData,
  removeData,
  saveData,
  updateData,
} from '../storage/AsyncStorage';
import {playerStore} from '../storage/player';

type UIProps = PropsWithChildren<{}>;

async function some() {
  // const saved = await saveData('mava', 'lava');
  // console.log(saved);

  // const savedObj = await saveData('mavaObj', {prop: 'lava'});
  // console.log(savedObj);

  // const savedNum = await saveData('mavaNum', 4);
  // console.log(savedNum);

  // const savedBool = await saveData('mavaBool', false);
  // console.log(savedBool);

  // const data = await loadData<string>('mava');
  // console.log(data);

  // const dataObj = await loadData<object>('mavaObj', 'object');
  // console.log(dataObj);

  // const dataNum = await loadData<number>('mavaNum', 'number');
  // console.log(dataNum);

  // const dataBool = await loadData<boolean>('mavaBool', 'boolean');
  // console.log(dataBool);

  // const updated = await updateData<string>('mava', oldData => oldData + 'some');
  // console.log(updated);

  // const updated2 = await updateData<object>(
  //   'mavaObj',
  //   oldData => ({
  //     ...oldData,
  //     newProp: 'newVal',
  //   }),
  //   'object',
  // );
  // console.log(updated2);

  // const updated3 = await updateData<number>(
  //   'mavaNum',
  //   oldData => oldData + 6,
  //   'number',
  // );
  // console.log(updated3);

  // const updated4 = await updateData<boolean>(
  //   'mavaBool',
  //   oldData => !oldData,
  //   'boolean',
  // );
  // console.log(updated4);

  // const removed = await removeData('mavaBool');
  // console.log(removed);

  // const data2 = await loadData('mavaBool');
  // console.log(data2);

  const name = await playerStore.getName();
  const surname = await playerStore.getSurname();
}

function UI({}: UIProps): React.JSX.Element {
  useEffect(() => {
    some();
  }, []);

  return (
    <View style={styles.ui}>
      <TopBar />
      <Stats />
      <Visualization />
      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  ui: {
    backgroundColor: 'white',
    height: 700,
  },
});

export default UI;
