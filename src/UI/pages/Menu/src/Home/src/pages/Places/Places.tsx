import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../consts/pages';

type PlacesProps = {
  navigation: Navigation;
};

function Places({navigation}: PlacesProps) {
  return (
    <ScrollView style={styles.box}>
      <SectionButton label="спорт зал" onPress={() => navigation.navigate(PageNames.Activities)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
    height: '100%',
  },
});

export default Places;
