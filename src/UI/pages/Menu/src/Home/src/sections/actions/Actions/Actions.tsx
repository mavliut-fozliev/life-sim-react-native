import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../../../../../../components/Button/Button';
import usePlayerStore from '../../../../../playerStore';
import {Navigation} from '../../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../../consts/pages';

type ActionsProps = {
  navigation: Navigation;
};

function Actions({navigation}: ActionsProps) {
  const playerStore = usePlayerStore();

  const growUp = () => {
    playerStore.$age.increase(1);
    playerStore.$energy.set(20);
  };

  return (
    <View style={styles.box}>
      <Button label="grow up" onPress={growUp} />
      <Button label="Places" onPress={() => navigation.navigate(PageNames.Places)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    height: 200,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 10,
    gap: 10,
  },
});

export default Actions;
