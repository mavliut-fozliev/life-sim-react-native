import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import usePlayerStore from '../../../../playerStore';
import {getRandomValue} from '../../../../../../../../utils/common';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import Activity from './src/Activity/Activity';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{prev: string}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const playerStore = usePlayerStore();
  const {getText} = useLocalizeText();

  const content: Record<string, React.JSX.Element> = {
    gym_1: <></>,
    gym_2: (
      <Activity
        label={getText(['places', 'activities', 'Run on a treadmill'])}
        navigation={navigation}
        price={3}
        resource={'energy'}
        action={() =>
          playerStore.$power.increase(
            getRandomValue([
              {value: 1, chance: 40},
              {value: 2, chance: 40},
              {value: 3, chance: 20},
            ]),
          )
        }
      />
    ),
    gym_3: (
      <Activity
        label={getText(['places', 'activities', 'Yoga'])}
        navigation={navigation}
        price={2}
        resource={'energy'}
        action={() => {
          playerStore.$health.increase(
            getRandomValue([
              {value: 1, chance: 70},
              {value: 2, chance: 30},
            ]),
          );
          playerStore.$power.increase(
            getRandomValue([
              {value: 1, chance: 70},
              {value: 2, chance: 30},
            ]),
          );
        }}
      />
    ),
    hospital_1: <></>,
    hospital_2: (
      <Activity
        label={getText(['places', 'activities', 'Take a check-up'])}
        navigation={navigation}
        price={500}
        resource={'money'}
        action={() => console.log('check up!')}
      />
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
