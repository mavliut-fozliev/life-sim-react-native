import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  PeopleRelationship,
  peopleRelationshipColors,
  peopleRelationshipLabels,
  peopleRelationshipMap,
  PeopleRole,
  PeopleSituation,
  peopleSituationColors,
} from '../../../consts/character/characterProps';
import {fontSizes} from '../../../consts/styles';
import {useLocalizeText} from '../../../locales/useLocalizeText';
import {findMatchingKeyByMaxNumber} from '../../../utils/common';
import RelationProgress from '../RelationProgress/RelationProgress';

type StatusGroupProps = {
  role: PeopleRole;
  relationship: number;
  situation?: PeopleSituation;
};

function StatusGroup({role, relationship, situation}: StatusGroupProps) {
  const {getText} = useLocalizeText();

  const relationshipStage =
    findMatchingKeyByMaxNumber(peopleRelationshipMap, relationship) || PeopleRelationship.Neutrality;

  const relationshipLabel =
    role === PeopleRole.Stranger
      ? peopleRelationshipLabels[PeopleRole.Familiar][PeopleRelationship.Neutrality]
      : peopleRelationshipLabels[role][relationshipStage];

  const relationshipColor = peopleRelationshipColors[relationshipStage];

  return (
    <View style={styles.relationships}>
      <RelationProgress value={relationshipStage} />
      <View style={[styles.status, {borderColor: relationshipColor}]}>
        <Text style={[styles.statusText, {color: relationshipColor}]}>
          {getText(['character', 'relationships', relationshipLabel])}
        </Text>
      </View>
      {situation && (
        <View style={[styles.status, {borderColor: peopleSituationColors[situation]}]}>
          <Text style={[styles.statusText, {color: peopleSituationColors[situation]}]}>
            {getText(['character', 'situation', situation])}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  relationships: {
    overflow: 'hidden',
    top: 2,
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
    fontWeight: 600,
  },
});

export default StatusGroup;
