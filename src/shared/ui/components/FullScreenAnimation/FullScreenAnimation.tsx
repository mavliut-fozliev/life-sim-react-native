import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {useIcon} from '../../../icons/useIcon';
import {Icon} from '../../../icons/icons';
import useGameStore from '../../../store/gameStore';

function IconComponent({icon}: {icon: Icon}) {
  return useIcon(icon, {size: '50%'});
}

function FullScreenAnimation() {
  const gameStore = useGameStore();

  const [iconValue, setIconValue] = useState<number>();

  useEffect(() => {
    if (gameStore.fullScreenAnimationIcon) {
      setIconValue(gameStore.fullScreenAnimationIcon);

      setTimeout(() => {
        gameStore.$fullScreenAnimationIcon.set(0);
        setIconValue(0);
      }, 1000);
    }
  }, [gameStore.$fullScreenAnimationIcon, gameStore.fullScreenAnimationIcon]);

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!iconValue) {
      return;
    }

    const fadeInOut = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.8,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.8,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]),
    );

    fadeInOut.start();

    return () => {
      fadeInOut.stop();
      opacity.setValue(0);
    };
  }, [iconValue, opacity]);

  return iconValue ? (
    <Animated.View style={[styles.box, {opacity}]}>
      <IconComponent icon={iconValue} />
    </Animated.View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenAnimation;
