import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PeopleRelationship, peopleRelationshipColors} from '../../../consts/character/characterProps';

type RelationProgressProps = {
  value: PeopleRelationship;
};

export const peopleRelationshipLevels = {
  [PeopleRelationship.Love]: 4,
  [PeopleRelationship.Friendliness]: 3,
  [PeopleRelationship.Neutrality]: 2,
  [PeopleRelationship.Coldness]: 1,
  [PeopleRelationship.Indifference]: 0,
};

function RelationProgress({value}: RelationProgressProps) {
  const stageCount = 4;
  const activeStage = peopleRelationshipLevels[value];

  const getBackgroundColor = (i: number) => (i < activeStage ? peopleRelationshipColors[value] : undefined);

  return (
    <View style={styles.container}>
      {[...Array(stageCount)].map((_, i) => (
        <View key={i.toString()} style={[styles.segment, {backgroundColor: getBackgroundColor(i)}]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
  },
  segment: {
    width: 10,
    height: 16,
    borderWidth: 1,
  },
});

export default RelationProgress;
