import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import usePlayerStore from '../../../../playerStore';
import {biasedRandom} from '../../../../../../../../utils/common';
import {Navigation, Route} from '../../../../../../../../types/navigation';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{hel: string}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const playerStore = usePlayerStore();

  console.log(route.params);

  return (
    <ScrollView style={styles.box}>
      <SectionButton
        label="качаться"
        onPress={() => {
          if (playerStore.energy < 3) {
            return;
          }
          playerStore.$power.increase(biasedRandom(1, 4));
          playerStore.$energy.decrease(3);
          navigation.pop(2);
        }}
        disabled={playerStore.energy < 3}
      />
      <SectionButton label="efwew" onPress={() => {}} />
      <SectionButton label="rwewfe" onPress={() => {}} />
      <SectionButton label="fwe wfew ef wf" onPress={() => {}} />
      <SectionButton label="wefwef wf w" onPress={() => {}} />
      <SectionButton label="qwrqg" onPress={() => {}} />
      <SectionButton label="13F S" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Activities;
