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
import {PeopleRole} from '../../../../../../../../consts/character/characterProps';
import {findByRole} from '../../../../../../../../utils/common';

type PeopleProps = {
  navigation: Navigation;
};

function People({navigation}: PeopleProps) {
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {getSprite} = useSprite();
  const {getText} = useLocalizeText();

  const father = getSprite(SpriteName.father, 60);
  const mother = getSprite(SpriteName.mother, 60);

  const fatherPerson = findByRole(characterStore.people, PeopleRole.Father);
  const motherPerson = findByRole(characterStore.people, PeopleRole.Mother);

  return (
    <ScrollView style={styles.box}>
      {fatherPerson && (
        <SectionButton
          label={`${fatherPerson.name} ${fatherPerson.surname}`}
          description={getText(['character', 'roles', PeopleRole.Father])}
          height={100}
          extraLine={
            <StatusGroup
              role={fatherPerson.role}
              relationship={fatherPerson.relationship}
              situation={fatherPerson.situation}
            />
          }
          mainIcon={father}
          icon={<></>}
          onPress={() => navigate.stepForward(PageNames.Intercations, {person: fatherPerson})}
        />
      )}
      {motherPerson && (
        <SectionButton
          label={`${motherPerson.name} ${motherPerson.surname}`}
          description={getText(['character', 'roles', PeopleRole.Mother])}
          height={100}
          extraLine={
            <StatusGroup
              role={motherPerson.role}
              relationship={motherPerson.relationship}
              situation={motherPerson.situation}
            />
          }
          mainIcon={mother}
          icon={<></>}
          onPress={() => navigate.stepForward(PageNames.Intercations, {person: motherPerson})}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default People;
