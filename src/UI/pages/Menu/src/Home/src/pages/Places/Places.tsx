import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../consts/pages';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import usePlayerStore from '../../../../playerStore';
import {places} from '../../../../../../../../consts/places';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import Strength from '../../../../../../../../icons/Strength';
import Heart from '../../../../../../../../icons/Heart';
import {PlaceType} from '../../../../../../../../types/places';

type PlacesProps = {
  navigation: Navigation;
};

const icons: {[type in PlaceType]: ReactNode} = {
  [PlaceType.Gym]: <Strength size={26} />,
  [PlaceType.Hospital]: <Heart size={26} />,
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
            mainIcon={icons[props.type]}
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
