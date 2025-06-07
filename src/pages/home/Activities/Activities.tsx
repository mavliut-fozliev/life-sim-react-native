import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../shared/constants/styles';
import {Navigation, Route} from '../../../shared/types/navigation';
import {PlaceProps} from '../../../shared/types/places';
import {useActivities} from './src/useActivities';
import {Person} from '../../../shared/types/people';
import {useNavigate} from '../../../shared/hooks/useNavigate';
import {PageNames} from '../../../shared/constants/pages';
import {useLocalizeText} from '../../../shared/locales/useLocalizeText';
import {PeopleRole} from '../../../shared/constants/character/characterProps';
import {usePeopleConnections} from '../../../shared/hooks/usePeopleConnections';
import {playerId} from '../../../shared/constants/character/player';
import {useSprite} from '../../../shared/sprites/hooks/useSprite';
import Divider from '../../../shared/ui/components/Divider/Divider';
import SectionButton from '../../../shared/ui/components/SectionButton/SectionButton';
import StatusGroup from '../../../shared/ui/components/StatusGroup/StatusGroup';

type ActivitiesProps = {
  navigation: Navigation;
  route: Route<{placeProps: PlaceProps; placePeople: Person[]}>;
};

function Activities({navigation, route}: ActivitiesProps) {
  const {activityMap} = useActivities(navigation);
  const navigate = useNavigate(navigation);
  const {translate} = useLocalizeText();
  const {getPersonSprite} = useSprite();
  const {findPersonConnection} = usePeopleConnections();

  const type = route.params.placeProps.type;
  const level = route.params.placeProps.level;

  const activities = activityMap[type][level];
  const placePeople = route.params.placePeople;

  return (
    <ScrollView style={styles.box}>
      {activities}
      <Divider label={translate('People')} />
      {placePeople.map((p, i) => {
        const connection = findPersonConnection(playerId, p.id);

        return (
          <SectionButton
            key={i.toString()}
            label={`${p.name} ${p.surname}`}
            description={p.placePeopleType && translate(p.placePeopleType)}
            height={100}
            extraLine={
              connection.role === PeopleRole.Stranger ? undefined : (
                <StatusGroup relationship={connection.relationship} situation={connection.situation} />
              )
            }
            mainIcon={getPersonSprite(p, 60)}
            icon={<></>}
            onPress={() => navigate.stepForward(PageNames.Intercations, {person: p})}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Activities;
