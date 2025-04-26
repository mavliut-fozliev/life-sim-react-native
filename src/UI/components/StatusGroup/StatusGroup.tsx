import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PeopleRelationship} from '../../../consts/character/characterProps';
import Status from '../Status/Status';

type StatusGroupProps = {
  relationship: PeopleRelationship[];
};

function StatusGroup({relationship}: StatusGroupProps) {
  return (
    <View style={styles.relationships}>
      {relationship.map((r, i) => (
        <Status key={i.toString()} peopleRelationship={r} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  relationships: {
    width: 300,
    overflow: 'hidden',
    top: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default StatusGroup;
