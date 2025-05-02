import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import useGameStore from '../../pages/Menu/src/store/gameStore';
import {Icon} from '../../../types/icons';
import {useIcon} from '../../../icons/useIcon';

function FullScreenAnimation() {
  const gameStore = useGameStore();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (gameStore.showFullScreenAnimation) {
      setVisible(true);

      setTimeout(() => {
        gameStore.$showFullScreenAnimation.set(false);
        setVisible(false);
      }, 1000);
    }
  }, [gameStore.showFullScreenAnimation, gameStore.$showFullScreenAnimation]);

  const icon = useIcon(Icon.Bills, {size: '70%'});

  return (
    <Modal animationType={'fade'} transparent={true} visible={visible}>
      <View style={styles.box}>{icon}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenAnimation;
