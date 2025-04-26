import React from 'react';
import Interaction from './src/Interaction';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import {Route} from '../../../../../../../../types/navigation';
import {Person} from '../../../../../../../../types/people';

type InteractionsProps = {
  route: Route<{person: Person[]}>;
};

function Intercations({route}: InteractionsProps) {
  const person = route.params.person;
  return (
    <ScrollView style={styles.box}>
      <Interaction />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Intercations;
