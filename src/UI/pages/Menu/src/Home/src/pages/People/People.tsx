import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import usePlayerStore from '../../../../playerStore';
import Adult from '../../sprites/characters/Adult/Adult';

function People() {
  const playerStore = usePlayerStore();

  return (
    <ScrollView style={styles.box}>
      <SectionButton
        label={`${playerStore.father.name} ${playerStore.father.surname}`}
        mainIcon={
          <Adult
            size={50}
            legs="light"
            body="light"
            head="light"
            eyes="black"
            mouth="smile"
            hair="average"
            style={styles.head}
          />
        }
        onPress={() => {}}
      />
      <SectionButton
        label={`${playerStore.mother.name} ${playerStore.mother.surname}`}
        mainIcon={
          <Adult size={50} legs="light" body="light" head="light" eyes="black" mouth="smile" style={styles.head} />
        }
        onPress={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
  head: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    transform: [{translateX: '-25%'}],
  },
});

export default People;
