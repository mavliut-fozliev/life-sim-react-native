import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fontSizes} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {PageNames} from '../../../../../../../../consts/pages';
import useCharacterStore from '../../../../store/characterStore';
import {SpriteName, useSprite} from '../../sprites/hooks/useSprite';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {peopleRelationshipColors} from '../../../../../../../../consts/character/characterProps';

type PeopleProps = {
  navigation: Navigation;
};

function People({navigation}: PeopleProps) {
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {getSprite} = useSprite();
  const {getText} = useLocalizeText();

  const mother = getSprite(SpriteName.mother, 50);
  const father = getSprite(SpriteName.father, 50);

  const relationships = (
    <View style={styles.relationships}>
      {characterStore.father.relationship.map((r, i) => (
        <View key={i.toString()} style={[styles.status, {borderColor: peopleRelationshipColors[r]}]}>
          <Text style={[styles.statusText, {color: peopleRelationshipColors[r]}]}>{r}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.box}>
      <SectionButton
        label={`${characterStore.father.name} ${characterStore.father.surname}`}
        description={getText(['character', 'roles', characterStore.father.role])}
        height={100}
        extraLine={relationships}
        mainIcon={father}
        onPress={() => navigate.stepForward(PageNames.Intercations, {person: characterStore.father})}
      />
      <SectionButton
        label={`${characterStore.mother.name} ${characterStore.mother.surname}`}
        description={getText(['character', 'roles', characterStore.mother.role])}
        height={100}
        extraLine={relationships}
        mainIcon={mother}
        onPress={() => navigate.stepForward(PageNames.Intercations, {person: characterStore.mother})}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
  relationships: {
    top: 2,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  status: {
    borderWidth: 2,
    borderRadius: 4,
  },
  statusText: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    fontSize: fontSizes.small,
  },
});

export default People;
