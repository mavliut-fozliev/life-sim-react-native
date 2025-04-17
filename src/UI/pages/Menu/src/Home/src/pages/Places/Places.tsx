import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../consts/pages';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import usePlayerStore from '../../../../playerStore';
import {places} from '../../../../../../../../consts/places';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';

type PlacesProps = {
  navigation: Navigation;
};

function Places({navigation}: PlacesProps) {
  const playerStore = usePlayerStore();

  const navigate = useNavigate(navigation);
  const {getText} = useLocalizeText();

  const existingPlaces = places[playerStore.country][playerStore.city] || {};

  return (
    <ScrollView style={styles.box}>
      {Object.entries(existingPlaces).map(([name, props]) => {
        return (
          <SectionButton
            key={name}
            label={getText(['places', 'names', name])}
            description={getText(['places', 'types', props.type])}
            onPress={() => navigate.stepForward(PageNames.Activities, {prev: props})}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default Places;
