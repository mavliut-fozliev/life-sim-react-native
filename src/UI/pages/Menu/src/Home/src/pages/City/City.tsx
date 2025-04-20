import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import usePlayerStore from '../../../../store/playerStore';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {Navigation} from '../../../../../../../../types/navigation';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {places} from '../../../../../../../../consts/places';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import {PageNames} from '../../../../../../../../consts/pages';
import {PlaceLevel, PlaceProps, PlaceType} from '../../../../../../../../types/places';
import Divider from '../../../../../../../components/Divider/Divider';
import Strength from '../../../../../../../../icons/Strength';
import Heart from '../../../../../../../../icons/Heart';
import ArrowRight from '../../../../../../../../icons/ArrowRight';
import Star from '../../../../../../../../icons/Star';
import useCharacterStore from '../../../../store/characterStore';

type CityProps = {
  navigation: Navigation;
};

const icons: {[type in PlaceType]: ReactNode} = {
  [PlaceType.Gym]: <Strength size={26} />,
  [PlaceType.Hospital]: <Heart size={26} />,
  [PlaceType.Nightclub]: <Heart size={26} borderColor="black" filling="black" />,
};

const numberLevel = {
  [PlaceLevel.One]: 1,
  [PlaceLevel.Two]: 2,
  [PlaceLevel.Three]: 3,
};

function City({navigation}: CityProps) {
  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {getText} = useLocalizeText();

  const districts = places[playerStore.country][playerStore.city] || {};

  function handlePress(districtName: string, placeName: string, placeProps: PlaceProps) {
    const minAge = placeProps.restrictions?.age?.min;
    if (minAge && minAge > playerStore.age) {
      console.log('restricted');
      return;
    }

    const placePeople = characterStore.people[districtName][placeName];

    navigate.stepForward(PageNames.Activities, {placeProps, placePeople});
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
              onPress={() => handlePress(districtName, placeName, placeProps)}
              icon={
                <View style={styles.icons}>
                  <View style={styles.stars}>
                    {Array.from({length: numberLevel[placeProps.level]}).map((l, i) => (
                      <Star size={16} key={i.toString()} />
                    ))}
                  </View>
                  <ArrowRight size={14} />
                </View>
              }
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
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
});

export default City;
