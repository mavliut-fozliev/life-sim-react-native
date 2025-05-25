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
import {useSprite} from '../../sprites/hooks/useSprite';
import StatusGroup from '../../../../../../../components/StatusGroup/StatusGroup';
import {PeopleRole} from '../../../../../../../../consts/character/characterProps';
import {usePeopleConnections} from '../../../../../../../../hooks/usePeopleConnections';
import {playerId} from '../../../../../../../../consts/character/player';

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
