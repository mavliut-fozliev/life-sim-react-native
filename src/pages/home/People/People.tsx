import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontSizes} from '../../../shared/constants/styles';
import {Navigation} from '../../../shared/types/navigation';
import {useNavigate} from '../../../shared/hooks/useNavigate';
import {PageNames} from '../../../shared/constants/pages';
import {useLocalizeText} from '../../../shared/locales/useLocalizeText';
import {PeopleConnection, Person} from '../../../shared/types/people';
import {usePeopleConnections} from '../../../features/character/hooks/usePeopleConnections';
import {ObjectRecord} from '../../../shared/types/common';
import {useSprite} from '../../../shared/sprites/hooks/useSprite';
import Divider from '../../../shared/ui/components/Divider/Divider';
import StatusGroup from '../../../shared/ui/components/StatusGroup/StatusGroup';
import {PeopleExactRole, PeopleRole} from '../../../features/character/characterProps';
import {playerId} from '../../../features/character/player';

type PeopleProps = {
  navigation: Navigation;
};

enum Headers {
  Family = 'Family',
  CloseCircle = 'Close Circle',
  Acquaintances = 'Acquaintances',
  Deceased = 'Deceased',
}

type PeopleData = ObjectRecord<Array<{person: Person; connection: PeopleConnection; exactRole?: PeopleExactRole}>>;

const {width} = Dimensions.get('window');

function People({navigation}: PeopleProps) {
  const {findExactRoles, findPersonConnectionsByRole} = usePeopleConnections();

  const navigate = useNavigate(navigation);
  const {getPersonSprite} = useSprite();
  const {translate} = useLocalizeText();

  const peopleData: PeopleData = {
    [Headers.Family]: [],
    [Headers.CloseCircle]: [],
    [Headers.Acquaintances]: [],
    [Headers.Deceased]: [],
  };

  const exactRoles = findExactRoles();
  const fatherData = exactRoles.Father;
  const motherData = exactRoles.Mother;

  if (fatherData) {
    const header = fatherData.person.dead ? Headers.Deceased : Headers.Family;
    peopleData[header].push({...fatherData, exactRole: PeopleExactRole.Father});
  }
  if (motherData) {
    const header = motherData.person.dead ? Headers.Deceased : Headers.Family;
    peopleData[header].push({...motherData, exactRole: PeopleExactRole.Mother});
  }

  const closeCircle = findPersonConnectionsByRole(playerId, PeopleRole.Friend);
  closeCircle.forEach(data => {
    const header = data.person.dead ? Headers.Deceased : Headers.CloseCircle;
    peopleData[header].push(data);
  });

  const acquaintances = findPersonConnectionsByRole(playerId, PeopleRole.Familiar);
  acquaintances.forEach(data => {
    const header = data.person.dead ? Headers.Deceased : Headers.Acquaintances;
    peopleData[header].push(data);
  });

  return (
    <ScrollView style={styles.container}>
      {Object.entries(peopleData).map(([title, people]) => (
        <View key={title} style={styles.group}>
          {people.length ? <Divider label={translate(title)} /> : <></>}
          <View style={styles.grid}>
            {people.map(data => (
              <TouchableOpacity
                key={data.person.id}
                style={[styles.card, data.person.dead ? styles.cardDead : undefined]}
                onPress={() => navigate.stepForward(PageNames.Intercations, {person: data.person})}>
                {getPersonSprite(data.person, 100)}
                <Text style={styles.name}>
                  {data.person.name} {data.person.surname}
                </Text>
                <Text style={styles.info}>{translate(data.exactRole || data.connection.role)}</Text>
                <Text style={styles.info}>
                  {translate(data.person.city)}, {translate(data.person.country)}
                </Text>
                <View style={styles.status}>
                  {data.person.dead ? undefined : (
                    <StatusGroup relationship={data.connection.relationship} situation={data.connection.situation} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
  },
  group: {
    marginTop: 10,
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: (width - 40) / 2,
    backgroundColor: 'white',
  },
  cardDead: {
    backgroundColor: '#E9E9E9',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: fontSizes.medium,
  },
  info: {
    fontSize: fontSizes.small,
    color: 'gray',
  },
  status: {
    alignSelf: 'flex-start',
    padding: 5,
    paddingBottom: 0,
  },
});

export default People;
