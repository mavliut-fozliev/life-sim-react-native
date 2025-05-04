import React from 'react';
import useGameStore from '../../../../../../pages/Menu/src/store/gameStore';
import {PeopleRole} from '../../../../../../../consts/character/characterProps';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import TextCover from '../TextCover/TextCover';

type ContentMap = {[key in PeopleRole]?: string[]};

function TryToMakePeace() {
  const gameStore = useGameStore();

  const contentMap: ContentMap = {
    [PeopleRole.Mother]: [
      'Tried to make amends — mom listened but replied coldly.',
      'We talked about the past argument. She said it was hard for her too.',
      'I apologized, she nodded silently. I hope that means something.',
      'Suggested we let the fight go — mom softened, even smiled.',
      'Asked for forgiveness. She was quiet for a while, then said “I’ll think about it.”',
    ],
    [PeopleRole.Father]: [
      'Said I was wrong. Dad listened, but didn’t say a word.',
      'Tried to reconnect. Dad muttered something about “the past being past.”',
      'Offered to talk heart-to-heart — he resisted at first, but eventually agreed.',
      'Admitted my mistakes. Dad looked surprised but nodded with respect.',
      'Tried to smooth things over — it was awkward, but he appreciated the effort.',
    ],
  };

  const role = gameStore.popUpContent.person?.role;

  const contents = role ? contentMap[role] || [''] : [''];

  const content = getRandomArrayItem(contents);

  return <TextCover>{content}</TextCover>;
}

export default TryToMakePeace;
