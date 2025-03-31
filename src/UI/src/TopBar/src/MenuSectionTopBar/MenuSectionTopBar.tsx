import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontSizes} from '../../../../../consts/styles';
import IconButton from '../../../components/IconButton/IconButton';
import ArrowLeft from '../../../../../icons/ArrowLeft';
import useZustand from '../../../../../storage/zustand';
import {getLocalizedText} from '../../../../../locales/getLocalizedText ';

type MenuSectionTopBarProps = {
  goBack: () => void;
};

function MenuSectionTopBar({goBack}: MenuSectionTopBarProps) {
  const {currentPage} = useZustand();
  const localizedText = getLocalizedText().menu.options;

  const currentPageIdentificator = currentPage.title.split('_').at(-1);
  const topBarTitle = currentPageIdentificator ? localizedText[currentPageIdentificator] : '';

  return (
    <View style={styles.box}>
      <View style={styles.button}>
        <IconButton icon={<ArrowLeft size={35} />} onPress={goBack} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {topBarTitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
});

export default MenuSectionTopBar;
