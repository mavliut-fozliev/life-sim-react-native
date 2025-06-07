import React from 'react';
import {StyleSheet, View} from 'react-native';
import usePlayerStore from '../../../../../../../shared/store/playerStore';
import {Navigation} from '../../../../../../../shared/types/navigation';
import {PageNames} from '../../../../../../../shared/constants/pages';
import {useNavigate} from '../../../../../../../shared/hooks/useNavigate';
import {useGrowUp} from './src/growUp/useGrowUp';
import Button from '../../../../../../../shared/ui/components/Button/Button';

type ActionsProps = {
  navigation: Navigation;
};

function Actions({navigation}: ActionsProps) {
  const playerStore = usePlayerStore();
  const navigate = useNavigate(navigation);

  const growUp = useGrowUp();

  return (
    <View style={styles.box}>
      <View style={styles.column}>
        <Button label="grow up" onPress={growUp} />
        <Button label="City" onPress={() => navigate.stepForward(PageNames.City)} disabled={playerStore.age < 0} />
        <Button label="History" onPress={() => navigate.stepForward(PageNames.History)} />
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
