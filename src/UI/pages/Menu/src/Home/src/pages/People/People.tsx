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
import Divider from '../../../../../../../components/Divider/Divider';

type PeopleProps = {
  navigation: Navigation;
};

function People({navigation}: PeopleProps) {
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {getSprite, getPersonSprite} = useSprite();
  const {getText} = useLocalizeText();

  const father = getSprite(SpriteName.father, 60);
  const mother = getSprite(SpriteName.mother, 60);

  const fatherPerson = findByRole(characterStore.people, PeopleRole.Father);
  const motherPerson = findByRole(characterStore.people, PeopleRole.Mother);

  const closeCircle = Object.values(characterStore.people).filter(p => p.role === PeopleRole.Friend);
  const acquaintances = Object.values(characterStore.people).filter(p => p.role === PeopleRole.Familiar);

  return (
    <ScrollView style={styles.box}>
      <Divider label={getText(['character', 'common', 'Family'])} />
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
      {closeCircle.length ? <Divider label={getText(['character', 'common', 'Close Circle'])} /> : <></>}
      {closeCircle.map(person => (
        <SectionButton
          key={person.id}
          label={`${person.name} ${person.surname}`}
          description={getText(['character', 'roles', person.role])}
          height={100}
          extraLine={<StatusGroup role={person.role} relationship={person.relationship} situation={person.situation} />}
          mainIcon={getPersonSprite(person, 60)}
          icon={<></>}
          onPress={() => navigate.stepForward(PageNames.Intercations, {person})}
        />
      ))}
      {acquaintances.length ? <Divider label={getText(['character', 'common', 'Acquaintances'])} /> : <></>}
      {acquaintances.map(person => (
        <SectionButton
          key={person.id}
          label={`${person.name} ${person.surname}`}
          description={getText(['character', 'roles', person.role])}
          height={100}
          extraLine={<StatusGroup role={person.role} relationship={person.relationship} situation={person.situation} />}
          mainIcon={getPersonSprite(person, 60)}
          icon={<></>}
          onPress={() => navigate.stepForward(PageNames.Intercations, {person})}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default People;
