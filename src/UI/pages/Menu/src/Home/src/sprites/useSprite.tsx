import {ReactNode} from 'react';
import useCharacterStore from '../../../store/characterStore';
import Infant from './characters/Infant/Infant';
import Adult from './characters/Adult/Adult';
import usePlayerStore from '../../../store/playerStore';
import TestHome from './realEstate/TestHome/TestHome';
import {DimensionValue, ViewStyle} from 'react-native';
import TestCar from './transport/TestCar/TestCar';
import {Person} from '../../../../../../../types/people';

export enum SpriteName {
  player = 'player',
  mother = 'mother',
  father = 'father',
  home = 'home',
  car = 'car',
}

type Sprites = {
  [spriteName in SpriteName]: ReactNode;
};

export function useSprite() {
  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();

  const getSpriteNode = (size: DimensionValue, style?: ViewStyle): Sprites => ({
    [SpriteName.player]: (
      <Infant
        size={size}
        legs={playerStore.sprite.legs}
        body={playerStore.sprite.body}
        head={playerStore.sprite.head}
        eyes={playerStore.sprite.eyes}
        mouth={playerStore.sprite.mouth}
      />
    ),
    [SpriteName.mother]: (
      <Adult
        size={size}
        legs={characterStore.mother.sprite.legs}
        body={characterStore.mother.sprite.body}
        head={characterStore.mother.sprite.head}
        eyes={characterStore.mother.sprite.eyes}
        mouth={characterStore.mother.sprite.mouth}
        style={style}
      />
    ),
    [SpriteName.father]: (
      <Adult
        size={size}
        legs={characterStore.father.sprite.legs}
        body={characterStore.father.sprite.body}
        head={characterStore.father.sprite.head}
        eyes={characterStore.father.sprite.eyes}
        mouth={characterStore.father.sprite.mouth}
        hair={characterStore.father.sprite.hair}
        style={style}
      />
    ),
    [SpriteName.home]: <TestHome size={size} style={style} />,
    [SpriteName.car]: <TestCar size={size} style={style} />,
  });

  const getSprite = (spriteName: SpriteName, size: DimensionValue, style?: ViewStyle) => {
    return getSpriteNode(size, style)[spriteName];
  };

  const getPersonSprite = (person: Person, size: DimensionValue) => {
    return <Adult size={size} {...person.sprite} />;
  };

  return {getSprite, getPersonSprite};
}
