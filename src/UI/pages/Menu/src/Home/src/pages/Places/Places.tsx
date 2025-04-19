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
import {DistrictProps, PlaceProps, PlaceType} from '../../../../../../../../types/places';
import usePlayerStore from '../../../../playerStore';

type PlacesProps = {
  navigation: Navigation;
  route: Route<{prev: DistrictProps}>;
};

const icons: {[type in PlaceType]: ReactNode} = {
  [PlaceType.Gym]: <Strength size={26} />,
  [PlaceType.Hospital]: <Heart size={26} />,
  [PlaceType.Nightclub]: <Heart size={26} borderColor="black" filling="black" />,
};

function Places({navigation, route}: PlacesProps) {
  const playerStore = usePlayerStore();

  const navigate = useNavigate(navigation);
  const {getText} = useLocalizeText();

  const existingPlaces = route.params.prev || {};

  function handlePress(props: PlaceProps) {
    const minAge = props.restrictions?.age?.min;
    if (minAge && minAge > playerStore.age) {
      console.log('restricted');
      return;
    }
    navigate.stepForward(PageNames.Activities, {prev: props});
  }

  return (
    <ScrollView style={styles.box}>
      {Object.entries(existingPlaces).map(([name, props]) => {
        return (
          <SectionButton
            key={name}
            label={getText(['places', 'names', name])}
            mainIcon={icons[props.type]}
            description={getText(['places', 'types', props.type])}
            onPress={() => handlePress(props)}
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
