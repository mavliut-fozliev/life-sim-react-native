import {ReactNode} from 'react';
import useCharacterStore from '../../../../store/characterStore';
import Adult from '../characters/Adult/Adult';
import usePlayerStore from '../../../../store/playerStore';
import TestHome from '../realEstate/TestHome/TestHome';
import {DimensionValue, ViewStyle} from 'react-native';
import TestCar from '../transport/TestCar/TestCar';
import {Person} from '../../../../../../../../types/people';
import TestAircraft from '../aircraft/TestAircraft/TestAircraft';
import {useGetSpriteByAge} from './useGetSpriteByAge';
import {PeopleRole} from '../../../../../../../../consts/character/characterProps';
import {findByRole} from '../../../../../../../../utils/common';

export enum SpriteName {
  player = 'player',
  mother = 'mother',
  father = 'father',
  home = 'home',
  car = 'car',
  aircraft = 'aircraft',
}

type Sprites = {
  [spriteName in SpriteName]: ReactNode;
};

export function useSprite() {
  const playerStore = usePlayerStore();
  const characterStore = useCharacterStore();

  const motherPerson = findByRole(characterStore.people, PeopleRole.Mother);
  const fatherPerson = findByRole(characterStore.people, PeopleRole.Father);

  const getSpriteByAge = useGetSpriteByAge();

  const getSpriteNode = (size: DimensionValue, style?: ViewStyle): Sprites => ({
    [SpriteName.player]: getSpriteByAge(
      playerStore.age,
      size,
      {
        legs: playerStore.sprite.legs,
        body: playerStore.sprite.body,
        head: playerStore.sprite.head,
        eyes: playerStore.sprite.eyes,
        mouth: playerStore.sprite.mouth,
        hair: playerStore.sprite.hair,
      },
      style,
    ),
    [SpriteName.mother]: motherPerson ? (
      <Adult
        size={size}
        legs={motherPerson.sprite.legs}
        body={motherPerson.sprite.body}
        head={motherPerson.sprite.head}
        eyes={motherPerson.sprite.eyes}
        mouth={motherPerson.sprite.mouth}
        style={style}
      />
    ) : (
      <></>
    ),
    [SpriteName.father]: fatherPerson ? (
      <Adult
        size={size}
        legs={fatherPerson.sprite.legs}
        body={fatherPerson.sprite.body}
        head={fatherPerson.sprite.head}
        eyes={fatherPerson.sprite.eyes}
        mouth={fatherPerson.sprite.mouth}
        hair={fatherPerson.sprite.hair}
        style={style}
      />
    ) : (
      <></>
    ),
    [SpriteName.home]: <TestHome size={size} style={style} />,
    [SpriteName.car]: <TestCar size={size} style={style} />,
    [SpriteName.aircraft]: <TestAircraft size={size} style={style} />,
  });

  const getSprite = (spriteName: SpriteName, size: DimensionValue, style?: ViewStyle) => {
    return getSpriteNode(size, style)[spriteName];
  };

  const getPersonSprite = (person: Person, size: DimensionValue) => {
    return getSpriteByAge(person.age, size, person.sprite);
  };

  return {getSprite, getPersonSprite};
}
