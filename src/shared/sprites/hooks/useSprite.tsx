import {ReactNode} from 'react';
import TestHome from '../realEstate/TestHome/TestHome';
import {DimensionValue, ViewStyle} from 'react-native';
import TestCar from '../transport/TestCar/TestCar';
import TestAircraft from '../aircraft/TestAircraft/TestAircraft';
import {useGetSpriteByAge} from './useGetSpriteByAge';
import usePlayerStore from '../../store/playerStore';
import {Person} from '../../types/people';

export enum SpriteName {
  player = 'player',
  home = 'home',
  car = 'car',
  aircraft = 'aircraft',
}

type Sprites = {
  [spriteName in SpriteName]: ReactNode;
};

export function useSprite() {
  const playerStore = usePlayerStore();

  const getSpriteByAge = useGetSpriteByAge();

  const getSpriteNode = (size: DimensionValue, style?: ViewStyle): Sprites => ({
    [SpriteName.player]: getSpriteByAge(
      playerStore.person.age,
      size,
      {
        body: playerStore.person.sprite.body,
        eyes: playerStore.person.sprite.eyes,
        mouth: playerStore.person.sprite.mouth,
        hair: playerStore.person.sprite.hair,
      },
      style,
    ),
    [SpriteName.home]: <TestHome size={size} style={style} />,
    [SpriteName.car]: <TestCar size={size} style={style} />,
    [SpriteName.aircraft]: <TestAircraft size={size} style={style} />,
  });

  const getSprite = (spriteName: SpriteName, size: DimensionValue, style?: ViewStyle) => {
    return getSpriteNode(size, style)[spriteName];
  };

  const getPersonSprite = (person: Person, size: DimensionValue, style?: ViewStyle) => {
    return getSpriteByAge(person.age, size, person.sprite, style);
  };

  return {getSprite, getPersonSprite};
}
