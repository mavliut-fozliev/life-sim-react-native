import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../../../../../../components/Button/Button';
import usePlayerStore from '../../../../../playerStore';
import {Navigation} from '../../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../../consts/pages';
import {useNavigate} from '../../../../../../../../../hooks/useNavigate';

type ActionsProps = {
  navigation: Navigation;
};

function Actions({navigation}: ActionsProps) {
  const playerStore = usePlayerStore();
  const navigate = useNavigate(navigation);

  const growUp = () => {
    playerStore.$age.increase(1);
    playerStore.$energy.set(20);
  };

  return (
    <View style={styles.box}>
      <View style={styles.column}>
        <Button label="grow up" onPress={growUp} />
        <Button label="City" onPress={() => navigate.stepForward(PageNames.City)} disabled={playerStore.age < 0} />
      </View>
      <View style={styles.column}>
        <Button label="People" onPress={() => navigate.stepForward(PageNames.People)} />
        <Button label="Change Clothes" onPress={() => {}} />
        <Button label="Possessions" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,255,0,0.2)',
    height: 200,
    paddingTop: 10,
    flexDirection: 'row',
  },
  column: {
    width: '50%',
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10,
  },
});

export default Actions;
