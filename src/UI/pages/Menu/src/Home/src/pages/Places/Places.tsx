import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../consts/pages';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import useGlobalStore from '../../../../../../../../storage/store';
import {safestr} from '../../../../../../../../utils/common';

type PlacesProps = {
  navigation: Navigation;
};

function Places({navigation}: PlacesProps) {
  const navigate = useNavigate(navigation);
  const {localizedText} = useGlobalStore();

  return (
    <ScrollView style={styles.box}>
      <SectionButton
        label="Мастер Стэн"
        description={safestr(localizedText.places?.gym?.title)}
        onPress={() => navigate.stepForward(PageNames.Activities, {prev: 'gym'})}
      />
      <SectionButton
        label="Гос. Поликлиника"
        description={safestr(localizedText.places?.hospital?.title)}
        onPress={() => navigate.stepForward(PageNames.Activities, {prev: 'hospital'})}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Places;
