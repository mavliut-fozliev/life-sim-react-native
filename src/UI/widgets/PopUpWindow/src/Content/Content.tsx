import {StyleSheet, Text} from 'react-native';
import useGameStore from '../../../../pages/Menu/src/store/gameStore';
import {fontSizes} from '../../../../../consts/styles';

function Content() {
  const gameStore = useGameStore();

  return <Text style={styles.content}>{gameStore.popUpContent.content}</Text>;
}

const styles = StyleSheet.create({
  content: {
    fontSize: fontSizes.small,
  },
});

export default Content;
