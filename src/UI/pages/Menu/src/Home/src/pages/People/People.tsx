import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontSizes} from '../../../../../../../../consts/styles';
import {Navigation} from '../../../../../../../../types/navigation';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {PageNames} from '../../../../../../../../consts/pages';
import useCharacterStore from '../../../../store/characterStore';
import {useSprite} from '../../sprites/hooks/useSprite';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import StatusGroup from '../../../../../../../components/StatusGroup/StatusGroup';
import {PeopleRole} from '../../../../../../../../consts/character/characterProps';
import {findByRole} from '../../../../../../../../utils/common';
import Divider from '../../../../../../../components/Divider/Divider';
import {Person} from '../../../../../../../../types/people';

type PeopleProps = {
  navigation: Navigation;
};

enum Headers {
  Family = 'Family',
  CloseCircle = 'Close Circle',
  Acquaintances = 'Acquaintances',
}

type PeopleData = Record<string, Person[]>;

const {width} = Dimensions.get('window');

function People({navigation}: PeopleProps) {
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {getPersonSprite} = useSprite();
  const {translate} = useLocalizeText();

  const peopleData: PeopleData = {
    [Headers.Family]: [],
  };

  const fatherPerson = findByRole(characterStore.people, PeopleRole.Father);
  if (fatherPerson) {
    peopleData[Headers.Family].push(fatherPerson);
  }
  const motherPerson = findByRole(characterStore.people, PeopleRole.Mother);
  if (motherPerson) {
    peopleData[Headers.Family].push(motherPerson);
  }

  const closeCircle = Object.values(characterStore.people).filter(p => p.role === PeopleRole.Friend);
  peopleData[Headers.CloseCircle] = closeCircle;

  const acquaintances = Object.values(characterStore.people).filter(p => p.role === PeopleRole.Familiar);
  peopleData[Headers.Acquaintances] = acquaintances;

  return (
    <ScrollView style={styles.container}>
      {Object.entries(peopleData).map(([title, people]) => (
        <View key={title} style={styles.group}>
          {people.length ? <Divider label={translate(title)} /> : <></>}
          <View style={styles.grid}>
            {people.map(person => (
              <TouchableOpacity
                key={person.id}
                style={styles.card}
                onPress={() => navigate.stepForward(PageNames.Intercations, {person})}>
                {getPersonSprite(person, 100)}
                <Text style={styles.name}>
                  {person.name} {person.surname}
                </Text>
                <Text style={styles.info}>
                  {translate('Role')}: {translate(person.role)}
                </Text>
                <Text style={styles.info}>
                  {translate('Location')}: {translate(person.city)}, {translate(person.country)}
                </Text>
                <View style={styles.status}>
                  <StatusGroup relationship={person.relationship} situation={person.situation} />
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
