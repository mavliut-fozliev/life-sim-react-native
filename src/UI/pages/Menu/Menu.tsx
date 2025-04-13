import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import SectionButton from '../../components/SectionButton/SectionButton';
import {PageNames} from '../../../consts/pages';
import {colors} from '../../../consts/styles';
import {Navigation} from '../../../types/navigation';
import useGlobalStore from '../../../storage/store';
import {useNavigate} from '../../../hooks/useNavigate';

type MenuProps = {
  navigation: Navigation;
};

function Menu({navigation}: MenuProps) {
  const {localizedText, gameInProgress} = useGlobalStore();
  const options = localizedText?.menu?.options;

  const navigate = useNavigate(navigation);

  useEffect(() => {
    if (gameInProgress) {
      navigate.stepForward(PageNames.Home);
    }
  }, []);

  return (
    <View style={styles.box}>
      {gameInProgress && <SectionButton label={options.Resume} onPress={() => navigate.stepForward(PageNames.Home)} />}
      <SectionButton label={options['Start New Life']} onPress={() => navigate.stepForward(PageNames.StartNewLife)} />
      <SectionButton label={options.Settings} onPress={() => navigate.stepForward(PageNames.Settings)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.secondary,
    flex: 1,
  },
});

export default Menu;
