import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PeopleSituation, peopleSituationColors} from '../../../consts/character/characterProps';
import {fontSizes} from '../../../consts/styles';
import {useLocalizeText} from '../../../locales/useLocalizeText';
import RelationProgress from '../RelationProgress/RelationProgress';

type StatusGroupProps = {
  relationship: number;
  situation?: PeopleSituation;
};

function StatusGroup({relationship, situation}: StatusGroupProps) {
  const {translate} = useLocalizeText();

  return (
    <View style={styles.relationships}>
      <RelationProgress relationship={relationship} />
      {situation && (
        <View style={[styles.status, {borderColor: peopleSituationColors[situation]}]}>
          <Text style={[styles.statusText, {color: peopleSituationColors[situation]}]}>{translate(situation)}</Text>
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
