import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import usePlayerStore from '../../../../playerStore';
import {biasedRandom, safestr} from '../../../../../../../../utils/common';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import {ObjectRecord} from '../../../../../../../../types/common';
import useGlobalStore from '../../../../../../../../storage/store';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{prev: string}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const playerStore = usePlayerStore();
  const {localizedText} = useGlobalStore();

  const content: ObjectRecord<React.JSX.Element> = {
    gym: (
      <>
        <SectionButton
          label={safestr(localizedText.places?.gym?.activities?.run)}
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
      </>
    ),
    hospital: (
      <>
        <SectionButton
          label={safestr(localizedText.places?.hospital?.activities?.check)}
          onPress={() => {
            if (playerStore.money < 500) {
              return;
            }
            console.log('check up!');
            playerStore.$money.decrease(500);
            navigation.pop(2);
          }}
          disabled={playerStore.money < 500}
        />
      </>
    ),
  };

  return <ScrollView style={styles.box}>{content[route.params.prev]}</ScrollView>;
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Activities;
