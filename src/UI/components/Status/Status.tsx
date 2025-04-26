import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PeopleRelationship, peopleRelationshipColors} from '../../../consts/character/characterProps';
import {useLocalizeText} from '../../../locales/useLocalizeText';
import {fontSizes} from '../../../consts/styles';

type StatusProps = {
  relationship: PeopleRelationship[];
};

function Status({relationship}: StatusProps) {
  const {getText} = useLocalizeText();

  return (
    <View style={styles.relationships}>
      {relationship.map((r, i) => (
        <View key={i.toString()} style={[styles.status, {borderColor: peopleRelationshipColors[r]}]}>
          <Text style={[styles.statusText, {color: peopleRelationshipColors[r]}]}>
            {getText(['character', 'relationships', r])}
          </Text>
        </View>
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

export default Status;
