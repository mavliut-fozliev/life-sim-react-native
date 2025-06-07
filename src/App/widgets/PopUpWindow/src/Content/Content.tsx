import {StyleSheet, Text} from 'react-native';
import {fontSizes} from '../../../../../shared/constants/styles';
import useGameStore from '../../../../../shared/store/gameStore';

function Content() {
  const gameStore = useGameStore();

  return <Text style={styles.content}>{gameStore.popUpContent.content}</Text>;
}

const styles = StyleSheet.create({
  content: {
    fontSize: fontSizes.small,
    textAlign: 'center',
  },
});

export default Content;
