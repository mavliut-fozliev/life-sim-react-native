import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {PageNames} from '../../../../../../../../consts/pages';
import useCharacterStore from '../../../../store/characterStore';
import {SpriteName, useSprite} from '../../sprites/hooks/useSprite';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import StatusGroup from '../../../../../../../components/StatusGroup/StatusGroup';

type PeopleProps = {
  navigation: Navigation;
};

function People({navigation}: PeopleProps) {
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {getSprite} = useSprite();
  const {getText} = useLocalizeText();

  const mother = getSprite(SpriteName.mother, 60);
  const father = getSprite(SpriteName.father, 60);

  return (
    <ScrollView style={styles.box}>
      <SectionButton
        label={`${characterStore.father.name} ${characterStore.father.surname}`}
        description={getText(['character', 'roles', characterStore.father.role])}
        height={100}
        extraLine={
          <StatusGroup
            role={characterStore.father.role}
            relationship={characterStore.father.relationship}
            situation={characterStore.father.situation}
          />
        }
        mainIcon={father}
        icon={<></>}
        onPress={() => navigate.stepForward(PageNames.Intercations, {person: characterStore.father})}
      />
      <SectionButton
        label={`${characterStore.mother.name} ${characterStore.mother.surname}`}
        description={getText(['character', 'roles', characterStore.mother.role])}
        height={100}
        extraLine={
          <StatusGroup
            role={characterStore.mother.role}
            relationship={characterStore.mother.relationship}
            situation={characterStore.mother.situation}
          />
        }
        mainIcon={mother}
        icon={<></>}
        onPress={() => navigate.stepForward(PageNames.Intercations, {person: characterStore.mother})}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default People;
