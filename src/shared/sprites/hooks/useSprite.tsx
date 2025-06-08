import {ReactNode} from 'react';
import TestHome from '../realEstate/TestHome/TestHome';
import {DimensionValue, ViewStyle} from 'react-native';
import TestCar from '../transport/TestCar/TestCar';
import TestAircraft from '../aircraft/TestAircraft/TestAircraft';
import {useGetSpriteByAge} from './useGetSpriteByAge';
import {Person} from '../../types/people';
import {usePlayer} from '../../../features/character/hooks/usePlayer';

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
  const player = usePlayer();
  const getSpriteByAge = useGetSpriteByAge();

  const getSpriteNode = (size: DimensionValue, style?: ViewStyle): Sprites => ({
    [SpriteName.player]: getSpriteByAge(
      player.age,
      size,
      {
        body: player.sprite.body,
        eyes: player.sprite.eyes,
        mouth: player.sprite.mouth,
        hair: player.sprite.hair,
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
