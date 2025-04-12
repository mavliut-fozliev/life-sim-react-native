import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import usePlayerStore from '../../../../playerStore';
import {biasedRandom, safestr} from '../../../../../../../../utils/common';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import {ObjectRecord} from '../../../../../../../../types/common';
import useGlobalStore from '../../../../../../../../storage/store';
import Activity from './src/Activity/Activity';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{prev: string}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const playerStore = usePlayerStore();
  const {localizedText} = useGlobalStore();

  const content: ObjectRecord<React.JSX.Element> = {
    gym_2: (
      <>
        <Activity
          label={safestr(localizedText.places?.types?.gym?.activities?.run)}
          navigation={navigation}
          price={3}
          resource={'energy'}
          action={() => playerStore.$power.increase(biasedRandom(1, 4))}
        />
      </>
    ),
    hospital_2: (
      <>
        <Activity
          label={safestr(localizedText.places?.types?.hospital?.activities?.check)}
          navigation={navigation}
          price={500}
          resource={'money'}
          action={() => console.log('check up!')}
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
