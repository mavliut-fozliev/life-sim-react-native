import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {PageNames} from '../../shared/constants/pages';
import {colors} from '../../shared/constants/styles';
import {Navigation} from '../../shared/types/navigation';
import {useNavigate} from '../../shared/hooks/useNavigate';
import {useLocalizeText} from '../../shared/locales/useLocalizeText';
import useGameStore from '../../shared/store/gameStore';
import SectionButton from '../../shared/ui/components/SectionButton/SectionButton';

type MenuProps = {
  navigation: Navigation;
};

function Menu({navigation}: MenuProps) {
  const {gameInProgress} = useGameStore();
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
