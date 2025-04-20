import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import {PlaceProps} from '../../../../../../../../types/places';
import {useActivities} from './src/useActivities';
import {Person} from '../../../../../../../../types/people';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {PageNames} from '../../../../../../../../consts/pages';
import Divider from '../../../../../../../components/Divider/Divider';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {useSprite} from '../../sprites/useSprite';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{placeProps: PlaceProps; placePeople: Person[]}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const {activityMap} = useActivities(navigation);
  const navigate = useNavigate(navigation);
  const {getText} = useLocalizeText();
  const {getPersonSprite} = useSprite();

  const type = route.params.placeProps.type;
  const level = route.params.placeProps.level;

  const activities = activityMap[type][level];
  const placePeople = route.params.placePeople;

  return (
    <ScrollView style={styles.box}>
      {activities}
      <Divider label={getText(['places', 'categories', 'People'])} />
      {placePeople.map((p, i) => (
        <SectionButton
          key={i.toString()}
          label={`${p.name} ${p.surname}`}
          description={p.placePeopleType && getText(['places', 'peopleType', p.placePeopleType])}
          mainIcon={getPersonSprite(p, 50)}
          onPress={() => navigate.stepForward(PageNames.Intercations, {prev: 'worker'})}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Activities;
