import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import usePlayerStore from '../../../../playerStore';
import {getRandomValue} from '../../../../../../../../utils/common';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import Activity from './src/Activity/Activity';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {PlaceLevel, PlaceType} from '../../../../../../../../types/places';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{prev: {type: PlaceType; level: PlaceLevel}}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const playerStore = usePlayerStore();
  const {getText} = useLocalizeText();

  const activityMap: Record<PlaceType, Record<PlaceLevel, React.JSX.Element>> = {
    'Gym': {
      '1': <></>,
      '2': (
        <>
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
        </>
      ),
      '3': (
        <>
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
        </>
      ),
    },
    'Hospital': {
      '1': <></>,
      '2': (
        <>
          <Activity
            label={getText(['places', 'activities', 'Take a check-up'])}
            navigation={navigation}
            price={500}
            resource={'money'}
            action={() => console.log('check up!')}
          />
        </>
      ),
      '3': <></>,
    },
  };

  const type = route.params.prev.type;
  const level = route.params.prev.level;
  const activities = activityMap[type][level];

  return <ScrollView style={styles.box}>{activities}</ScrollView>;
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Activities;
