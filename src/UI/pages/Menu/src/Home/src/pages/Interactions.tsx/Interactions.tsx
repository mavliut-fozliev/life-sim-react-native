import React from 'react';
import Interaction from './src/Interaction/Interaction';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fontSizes} from '../../../../../../../../consts/styles';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import {Person} from '../../../../../../../../types/people';
import {findMatchingKeyByMaxNumber} from '../../../../../../../../utils/common';
import {
  PeopleExactRole,
  peopleRelationshipMap,
  PeopleRole,
} from '../../../../../../../../consts/character/characterProps';
import {interactions} from '../../../../../../../../consts/character/interactions/interactions';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {useSprite} from '../../sprites/hooks/useSprite';
import StatusGroup from '../../../../../../../components/StatusGroup/StatusGroup';
import {playerId} from '../../../../../../../../consts/character/player';
import {usePeopleConnections} from '../../../../../../../../hooks/usePeopleConnections';

type InteractionsProps = {
  navigation: Navigation;
  route: Route<{person: Person}>;
};

function Intercations({navigation, route}: InteractionsProps) {
  const {translate} = useLocalizeText();
  const {getPersonSprite} = useSprite();
  const {findPersonConnection, findExactRoles} = usePeopleConnections();

  const person = route.params.person;
  const connectionToPlayer = findPersonConnection(person.id, playerId);

  const getExactRole = () => {
    if (connectionToPlayer.role === PeopleRole.ParentChild) {
      const exactRoles = findExactRoles();

      const peopleExactRoles = [
        PeopleExactRole.Father,
        PeopleExactRole.Mother,
        PeopleExactRole.Son,
        PeopleExactRole.Daughter,
      ];

      const exactRole = peopleExactRoles.find(role => exactRoles[role]?.person.id === person.id);
      if (exactRole) {
        return exactRole;
      }
    }

    return connectionToPlayer.role;
  };

  const relationshipStage = findMatchingKeyByMaxNumber(peopleRelationshipMap, connectionToPlayer.relationship);

  const allInteractions = interactions[person.gender][connectionToPlayer.role] || [];

  const getAvailableInteractions = () => {
    if (person.dead || !relationshipStage) {
      return [];
    }
    return allInteractions.filter(i => i.conditions.includes(relationshipStage));
  };

  return (
    <ScrollView style={styles.box}>
      <View style={styles.info}>
        {getPersonSprite(person, 100)}
        <View>
          <Text style={styles.infoText}>
            {person.name} {person.surname}
          </Text>
          <Text style={styles.infoText}>
            {translate('Role')}: {translate(getExactRole())}
          </Text>
          <Text style={styles.infoText}>
            {translate('Age')}: {person.age}
          </Text>
          <Text style={styles.infoText}>
            {translate('Location')}: {translate(person.city)}, {translate(person.country)}
          </Text>
          <View>
            {person.dead || connectionToPlayer.role === PeopleRole.Stranger ? undefined : (
              <StatusGroup relationship={connectionToPlayer.relationship} situation={connectionToPlayer.situation} />
            )}
          </View>
        </View>
      </View>
      {getAvailableInteractions().map((interaction, i) => (
        <Interaction key={i.toString()} interaction={interaction} person={person} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
  info: {
    padding: 10,
    flexDirection: 'row',
  },
  infoText: {
    fontSize: fontSizes.small,
  },
});

export default Intercations;
