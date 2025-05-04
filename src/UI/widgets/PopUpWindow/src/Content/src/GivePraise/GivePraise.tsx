import React from 'react';
import useGameStore from '../../../../../../pages/Menu/src/store/gameStore';
import {PeopleRole} from '../../../../../../../consts/character/characterProps';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import TextCover from '../TextCover/TextCover';

type ContentMap = {[key in PeopleRole]?: string[]};

function GivePraise() {
  const gameStore = useGameStore();

  const contentMap: ContentMap = {
    [PeopleRole.Mother]: [
      'I told mom her dinner was amazing — she blushed but smiled.',
      'Praised her for how she handles everything — like she has endless energy.',
      'I complimented how stylish she looked today — she was clearly pleased.',
      'Told her I’ve always admired her patience.',
      'Praised her for how she supports everyone even when she’s struggling herself.',
      'I said I’ve always admired how she knows the right words to comfort.',
      'Praised her for how she raised me — she nearly teared up.',
      'Remarked how she brings real warmth and comfort to the home.',
      'Told her her advice often saves me in tough times.',
      'Praised how she takes care of grandma — she has patience for three.',
    ],
    [PeopleRole.Father]: [
      'Told dad I respect his work ethic — he brushed it off, but I could tell he liked it.',
      'Praised how he fixed the shelf — looks better than new.',
      'Told him I always saw him as a strong man — he went quiet for a while.',
      'Pointed out that he has a great sense of humor — dad laughed in return.',
      'Thanked him for everything he taught me.',
      'Told him I’m proud of the man he’s become.',
      'Said his persistence has always been an example for me.',
      'Praised him for how he solves problems on the fly.',
      'Noted his real talent for fixing just about anything.',
      'Told him I always felt safe around him.',
    ],
  };

  const role = gameStore.popUpContent.person?.role;

  const contents = role ? contentMap[role] || [''] : [''];

  const content = getRandomArrayItem(contents);

  return <TextCover>{content}</TextCover>;
}

export default GivePraise;
