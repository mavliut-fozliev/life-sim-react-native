import React from 'react';
import useGameStore from '../../../../../../pages/Menu/src/store/gameStore';
import {PeopleRole} from '../../../../../../../consts/character/characterProps';
import {getRandomArrayItem} from '../../../../../../../utils/common';
import TextCover from '../TextCover/TextCover';

type ContentMap = {[key in PeopleRole]?: string[]};

function TalkOnThePhone() {
  const gameStore = useGameStore();

  const contentMap: ContentMap = {
    [PeopleRole.Mother]: [
      'Chatted with mom on the phone — she shared some new recipes.',
      'Called mom just to hear her voice.',
      'Talked a long time about the past — remembered when I was little.',
      'Asked how she’s doing — she said “fine” at first, but then opened up.',
      'Mom gave me a hard time about why I don’t call more often.',
    ],
    [PeopleRole.Father]: [
      'Called dad — we were silent at first, then got talking.',
      'Dad talked about work — he sounded tired but calm.',
      'Asked dad for advice — as always, brief but spot-on.',
      'Just chatted about little things — weather, football, life.',
      'Dad didn’t recognize my voice right away — we both laughed.',
    ],
  };

  const role = gameStore.popUpContent.person?.role;

  const contents = role ? contentMap[role] || [''] : [''];

  const content = getRandomArrayItem(contents);

  return <TextCover>{content}</TextCover>;
}

export default TalkOnThePhone;
