import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import {PlaceLevel, PlaceType} from '../../../../../../../../types/places';
import {useActivities} from './src/useActivities';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{prev: {type: PlaceType; level: PlaceLevel}}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const {activityMap} = useActivities(navigation);

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
