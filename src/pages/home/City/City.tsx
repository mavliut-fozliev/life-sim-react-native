import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../../../shared/constants/styles';
import usePlayerStore from '../../../shared/store/playerStore';
import {useNavigate} from '../../../shared/hooks/useNavigate';
import {Navigation} from '../../../shared/types/navigation';
import {useLocalizeText} from '../../../shared/locales/useLocalizeText';
import {PageNames} from '../../../shared/constants/pages';
import useCharacterStore from '../../../shared/store/characterStore';
import {Icon} from '../../../shared/icons/icons';
import {PlaceProps} from '../../../features/places/types';
import {useIcon} from '../../../shared/icons/useIcon';
import Divider from '../../../shared/ui/components/Divider/Divider';
import SectionButton from '../../../shared/ui/components/SectionButton/SectionButton';
import {PlaceLevel, PlaceType} from '../../../features/places/common';
import {getDistricts} from '../../../features/places/helpers';

type CityProps = {
  navigation: Navigation;
};

const numberLevel = {
  [PlaceLevel.One]: 1,
  [PlaceLevel.Two]: 2,
  [PlaceLevel.Three]: 3,
};

function StarIcon() {
  return useIcon(Icon.Star, {size: 16});
}

function City({navigation}: CityProps) {
  const icons: {[type in PlaceType]: React.JSX.Element} = {
    [PlaceType.Gym]: useIcon(Icon.Strength, {size: 26}),
    [PlaceType.Hospital]: useIcon(Icon.Heart, {size: 26}),
    [PlaceType.Nightclub]: useIcon(Icon.Heart, {size: 26, borderColor: 'black', filling: 'black'}),
  };

  const arrowRight = useIcon(Icon.ArrowRight, {size: 14});

  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();

  const navigate = useNavigate(navigation);
  const {translate} = useLocalizeText();

  function handlePress(districtName: string, placeName: string, placeProps: PlaceProps) {
    const minAge = placeProps.restrictions?.age?.min;
    if (minAge && minAge > playerStore.person.age) {
      console.log('restricted');
      return;
    }

    const placePeopleIds = characterStore.placePeople[districtName][placeName];
    const placePeople = placePeopleIds.map(p => characterStore.people[p]);

    navigate.stepForward(PageNames.Activities, {placeProps, placePeople});
  }

  const districts = getDistricts(playerStore.person);

  return (
    <ScrollView style={styles.box}>
      {Object.entries(districts).map(([districtName, districtProps]) => (
        <View key={districtName}>
          <Divider label={translate(districtName)} />
          {Object.entries(districtProps).map(([placeName, placeProps]) => (
            <SectionButton
              key={placeName}
              label={translate(placeName)}
              mainIcon={icons[placeProps.type]}
              description={translate(placeProps.type)}
              onPress={() => handlePress(districtName, placeName, placeProps)}
              icon={
                <View style={styles.icons}>
                  <View style={styles.stars}>
                    {Array.from({length: numberLevel[placeProps.level]}).map((l, i) => (
                      <StarIcon key={i.toString()} />
                    ))}
                  </View>
                  {arrowRight}
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
