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
      <Button label="grow up" onPress={growUp} />
      <Button label="Places" onPress={() => navigate.stepForward(PageNames.Places)} disabled={playerStore.age < 6} />
      <Button
        label="Education"
        onPress={() => navigate.stepForward(PageNames.Education)}
        disabled={playerStore.age < 2}
      />
      <Button label="Сareer" onPress={() => navigate.stepForward(PageNames.Carrer)} disabled={playerStore.age < 16} />
      <Button label="People" onPress={() => navigate.stepForward(PageNames.People)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,255,0,0.2)',
    height: 200,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 10,
    gap: 10,
  },
});

export default Actions;
