import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {
  PeopleRelationship,
  peopleRelationshipColors,
  peopleRelationshipMap,
} from '../../../consts/character/characterProps';
import {findMatchingKeyByMaxNumber} from '../../../utils/common';

type RelationProgressProps = {
  relationship: number;
};

export const peopleRelationshipLevels = {
  [PeopleRelationship.Love]: 5,
  [PeopleRelationship.Friendliness]: 4,
  [PeopleRelationship.Neutrality]: 3,
  [PeopleRelationship.Coldness]: 2,
  [PeopleRelationship.Indifference]: 1,
};

function RelationProgress({relationship}: RelationProgressProps) {
  const relationshipStage =
    findMatchingKeyByMaxNumber(peopleRelationshipMap, relationship) || PeopleRelationship.Neutrality;

  const activeStage = peopleRelationshipLevels[relationshipStage];

  const prevStage =
    findMatchingKeyByMaxNumber(peopleRelationshipLevels, activeStage - 1) ?? PeopleRelationship.Neutrality;

  const maxValue = peopleRelationshipMap[relationshipStage];
  const minValue = prevStage === PeopleRelationship.Indifference ? 0 : peopleRelationshipMap[prevStage];

  const progress = Math.round(((relationship - minValue) / (maxValue - minValue)) * 100);

  const getBackgroundColor = (i: number) => (i < activeStage ? peopleRelationshipColors[relationshipStage] : undefined);

  const getStageProgressStyle = (i: number) =>
    ({
      backgroundColor: getBackgroundColor(i),
      width: i < activeStage - 1 ? '100%' : `${progress}%`,
    } as ViewStyle);

  const stageCount = 5;

  return (
    <View style={styles.container}>
      {[...Array(stageCount)].map((_, i) => (
        <View key={i.toString()} style={[styles.segment]}>
          <View style={[styles.segmentProgress, getStageProgressStyle(i)]} />
        </View>
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
  segmentProgress: {
    height: '100%',
  },
});

export default RelationProgress;
