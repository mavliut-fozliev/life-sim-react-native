import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../consts/pages';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';

type PlacesProps = {
  navigation: Navigation;
};

function Places({navigation}: PlacesProps) {
  const navigate = useNavigate(navigation);
  return (
    <ScrollView style={styles.box}>
      <SectionButton label="спорт зал" onPress={() => navigate.stepForward(PageNames.Activities)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Places;
