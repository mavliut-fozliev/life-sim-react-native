import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {Navigation, Route} from '../../../../../../../../types/navigation';
import {PageNames} from '../../../../../../../../consts/pages';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import Strength from '../../../../../../../../icons/Strength';
import Heart from '../../../../../../../../icons/Heart';
import {PlaceLevel, PlaceType} from '../../../../../../../../types/places';

type PlacesProps = {
  navigation: Navigation;
  route: Route<{prev: {[place: string]: {type: PlaceType; level: PlaceLevel}}}>;
};

const icons: {[type in PlaceType]: ReactNode} = {
  [PlaceType.Gym]: <Strength size={26} />,
  [PlaceType.Hospital]: <Heart size={26} />,
  [PlaceType.Nightclub]: <Heart size={26} borderColor="black" filling="black" />,
};

function Places({navigation, route}: PlacesProps) {
  const navigate = useNavigate(navigation);
  const {getText} = useLocalizeText();

  const existingPlaces = route.params.prev || {};

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
