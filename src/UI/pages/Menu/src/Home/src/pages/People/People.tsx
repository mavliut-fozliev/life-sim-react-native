import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {PageNames} from '../../../../../../../../consts/pages';
import useCharacterStore from '../../../../store/characterStore';
import {SpriteName, useSprite} from '../../sprites/hooks/useSprite';

type PeopleProps = {
  navigation: Navigation;
};

function People({navigation}: PeopleProps) {
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {getSprite} = useSprite();

  const mother = getSprite(SpriteName.mother, 50);
  const father = getSprite(SpriteName.father, 50);

  return (
    <ScrollView style={styles.box}>
      <SectionButton
        label={`${characterStore.father.name} ${characterStore.father.surname}`}
        mainIcon={father}
        onPress={() => navigate.stepForward(PageNames.Intercations, {prev: 'father'})}
      />
      <SectionButton
        label={`${characterStore.mother.name} ${characterStore.mother.surname}`}
        mainIcon={mother}
        onPress={() => navigate.stepForward(PageNames.Intercations, {prev: 'mother'})}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
  image: {
    position: 'absolute',
    width: '200%',
    height: '200%',
    transform: [{translateX: '-25%'}],
  },
});

export default People;
