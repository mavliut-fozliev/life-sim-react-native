import {DimensionValue, ViewStyle} from 'react-native';
import {ReactNode} from 'react';
import Infant from '../characters/Infant/Infant';
import Adult from '../characters/Adult/Adult';
import {CommonSpriteVariants} from '../../types/people';
import {findMatchingKeyByMaxNumber} from '../../utils/common';
import {SpriteEras} from '../../../features/character/characterProps';

export function useGetSpriteByAge() {
  const spriteAges: {[key in SpriteEras]: number} = {
    [SpriteEras.infant]: 2,
    [SpriteEras.child]: 7,
    [SpriteEras.preTeen]: 13,
    [SpriteEras.teenager]: 17,
    [SpriteEras.adult]: 59,
    [SpriteEras.elder]: 1000,
  };

  return (age: number, size: DimensionValue, spriteVariants: CommonSpriteVariants, style?: ViewStyle) => {
    const spriteAge = findMatchingKeyByMaxNumber(spriteAges, age) ?? SpriteEras.elder;

    const characterSprites: {[key in SpriteEras]: ReactNode} = {
      [SpriteEras.infant]: (
        <Infant
          size={size}
          body={spriteVariants.body}
          eyes={spriteVariants.eyes}
          mouth={spriteVariants.mouth}
          style={style}
        />
      ),
      [SpriteEras.child]: (
        <Adult
          size={size}
          body={spriteVariants.body}
          eyes={spriteVariants.eyes}
          mouth={spriteVariants.mouth}
          hair={spriteVariants.hair}
          style={style}
        />
      ),
      [SpriteEras.preTeen]: (
        <Adult
          size={size}
          body={spriteVariants.body}
          eyes={spriteVariants.eyes}
          mouth={spriteVariants.mouth}
          hair={spriteVariants.hair}
          style={style}
        />
      ),
      [SpriteEras.teenager]: (
        <Adult
          size={size}
          body={spriteVariants.body}
          eyes={spriteVariants.eyes}
          mouth={spriteVariants.mouth}
          hair={spriteVariants.hair}
          style={style}
        />
      ),
      [SpriteEras.adult]: (
        <Adult
          size={size}
          body={spriteVariants.body}
          eyes={spriteVariants.eyes}
          mouth={spriteVariants.mouth}
          hair={spriteVariants.hair}
          style={style}
        />
      ),
      [SpriteEras.elder]: (
        <Adult
          size={size}
          body={spriteVariants.body}
          eyes={spriteVariants.eyes}
          mouth={spriteVariants.mouth}
          hair={spriteVariants.hair}
          style={style}
        />
      ),
    };

    return characterSprites[spriteAge];
  };
}
