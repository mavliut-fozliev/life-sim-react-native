import React from 'react';
import Interaction from './src/Interaction';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import {Person} from '../../../../../../../../types/people';
import {interactions} from '../../../../../../../../consts/character/interactions';
import {findMatchingKeyByMaxNumber} from '../../../../../../../../utils/common';
import {peopleRelationshipMap} from '../../../../../../../../consts/character/characterProps';

type InteractionsProps = {
  navigation: Navigation;
  route: Route<{person: Person}>;
};

function Intercations({navigation, route}: InteractionsProps) {
  const person = route.params.person;

  const relationshipStage = findMatchingKeyByMaxNumber(peopleRelationshipMap, person.relationship);

  const availableInteractions = relationshipStage
    ? interactions[person.role].filter(i => i.conditions.includes(relationshipStage))
    : [];

  return (
    <ScrollView style={styles.box}>
      {availableInteractions.map((interaction, i) => (
        <Interaction key={i.toString()} interaction={interaction} person={person} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Intercations;
