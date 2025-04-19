import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from '../../../../../../../../consts/styles';
import usePlayerStore from '../../../../playerStore';
import {useNavigate} from '../../../../../../../../hooks/useNavigate';
import {Navigation} from '../../../../../../../../types/navigation';
import {useLocalizeText} from '../../../../../../../../locales/useLocalizeText';
import {places} from '../../../../../../../../consts/places';
import SectionButton from '../../../../../../../components/SectionButton/SectionButton';
import Bills from '../../../../../../../../icons/Bills';
import {PageNames} from '../../../../../../../../consts/pages';

type CityProps = {
  navigation: Navigation;
};

function City({navigation}: CityProps) {
  const playerStore = usePlayerStore();

  const navigate = useNavigate(navigation);
  const {getText} = useLocalizeText();

  const districts = places[playerStore.country][playerStore.city] || {};

  return (
    <ScrollView style={styles.box}>
      {Object.entries(districts).map(([name, props]) => {
        return (
          <SectionButton
            key={name}
            label={getText(['places', 'districts', name])}
            mainIcon={<Bills size={30} />}
            onPress={() => navigate.stepForward(PageNames.Places, {prev: props})}
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

export default City;
