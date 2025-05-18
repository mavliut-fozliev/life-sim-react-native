import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import SectionButton from '../../components/SectionButton/SectionButton';
import {PageNames} from '../../../consts/pages';
import {colors} from '../../../consts/styles';
import {Navigation} from '../../../types/navigation';
import useGlobalStore from '../../../storage/store';
import {useNavigate} from '../../../hooks/useNavigate';
import {useLocalizeText} from '../../../locales/useLocalizeText';

type MenuProps = {
  navigation: Navigation;
};

function Menu({navigation}: MenuProps) {
  const {gameInProgress} = useGlobalStore();
  const {translate} = useLocalizeText();

  const navigate = useNavigate(navigation);

  useEffect(() => {
    if (gameInProgress) {
      navigate.stepForward(PageNames.Home);
    }
  }, []);

  return (
    <View style={styles.box}>
      {gameInProgress && (
        <SectionButton label={translate('Resume')} onPress={() => navigate.stepForward(PageNames.Home)} />
      )}
      <SectionButton label={translate('Start New Life')} onPress={() => navigate.stepForward(PageNames.StartNewLife)} />
      <SectionButton label={translate('Settings')} onPress={() => navigate.stepForward(PageNames.Settings)} />
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
