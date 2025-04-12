import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../consts/pages';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import useGlobalStore from '../../../../../../../../storage/store';
import {safestr} from '../../../../../../../../utils/common';
import usePlayerStore from '../../../../playerStore';
import {places} from '../../../../../../../../consts/places';

type PlacesProps = {
  navigation: Navigation;
};

function Places({navigation}: PlacesProps) {
  const navigate = useNavigate(navigation);
  const {localizedText} = useGlobalStore();
  const playerStore = usePlayerStore();

  const existingPlaces = places[playerStore.country]?.cities?.[playerStore.city];

  return (
    <ScrollView style={styles.box}>
      {Object.entries(existingPlaces).map(([name, props]) => (
        <SectionButton
          key={name}
          label={safestr(localizedText.places?.names?.[name])}
          description={safestr(localizedText.places?.types?.[props.type.slice(0, -2)]?.title)}
          onPress={() => navigate.stepForward(PageNames.Activities, {prev: props.type})}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Places;
