import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import usePlayerStore from '../../../../playerStore';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {Navigation} from '../../../../../../../../types/navigation';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {places} from '../../../../../../../../consts/places';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {PageNames} from '../../../../../../../../consts/pages';
import {PlaceProps, PlaceType} from '../../../../../../../../types/places';
import Divider from '../../../../../../../components/Divider/Divider';
import Strength from '../../../../../../../../icons/Strength';
import Heart from '../../../../../../../../icons/Heart';

type CityProps = {
  navigation: Navigation;
};

const icons: {[type in PlaceType]: ReactNode} = {
  [PlaceType.Gym]: <Strength size={26} />,
  [PlaceType.Hospital]: <Heart size={26} />,
  [PlaceType.Nightclub]: <Heart size={26} borderColor="black" filling="black" />,
};

function City({navigation}: CityProps) {
  const playerStore = usePlayerStore();

  const navigate = useNavigate(navigation);
  const {getText} = useLocalizeText();

  const districts = places[playerStore.country][playerStore.city] || {};

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
      {Object.entries(districts).map(([districtName, districtProps]) => (
        <View key={districtName}>
          <Divider label={getText(['places', 'districts', districtName])} />
          {Object.entries(districtProps).map(([placeName, placeProps]) => (
            <SectionButton
              key={placeName}
              label={getText(['places', 'names', placeName])}
              mainIcon={icons[placeProps.type]}
              description={getText(['places', 'types', placeProps.type])}
              onPress={() => handlePress(placeProps)}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
  },
});

export default City;
