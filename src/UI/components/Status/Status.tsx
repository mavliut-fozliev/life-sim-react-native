import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PeopleRelationship, peopleRelationshipColors} from '../../../consts/character/characterProps';
import {useLocalizeText} from '../../../locales/useLocalizeText';
import {fontSizes} from '../../../consts/styles';
import {PlayerStatus, playerStatusColors} from '../../../consts/character/player';

type StatusProps = {
  peopleRelationship?: PeopleRelationship;
  playerStatus?: PlayerStatus;
};

function Status({peopleRelationship, playerStatus}: StatusProps) {
  const {getText} = useLocalizeText();

  const color = peopleRelationship
    ? peopleRelationshipColors[peopleRelationship]
    : playerStatus
    ? playerStatusColors[playerStatus]
    : 'black';

  const label = peopleRelationship
    ? getText(['character', 'relationships', peopleRelationship])
    : playerStatus
    ? getText(['character', 'statuses', playerStatus])
    : '';

  return (
    <View style={[styles.status, {borderColor: color}]}>
      <Text style={[styles.statusText, {color: color}]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
