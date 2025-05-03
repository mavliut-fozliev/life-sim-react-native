import React from 'react';
import TextCover from '../TextCover/TextCover';
import useGameStore from '../../../../../../pages/Menu/src/store/gameStore';
import {PeopleRole} from '../../../../../../../consts/character/characterProps';
import {getRandomArrayItem} from '../../../../../../../utils/common';

type ContentMap = {[key in PeopleRole]?: string[]};

function SpendTimeTogether() {
  const gameStore = useGameStore();

  const contentMap: ContentMap = {
    [PeopleRole.Mother]: [
      'My mother and I were looking at old family photographs.',
      'We were flipping through old albums, and mom laughed remembering what I used to be like.',
      'My mom and I went shopping.',
      'Mom baked a pie and I helped — or maybe just got in the way.',
      'We just sat in the kitchen, drank tea, and talked about life.',
      'Mom told me a childhood story I had never heard before.',
      'I helped mom sort through old stuff — it took the whole evening.',
      'We watched her favorite series, and she kept commenting on everything.',
      'Mom made me try on old clothes just for a laugh.',
    ],
    [PeopleRole.Father]: [
      'Dad turned on the game and invited me to watch — a rare moment.',
      'We tinkered in the garage, mostly talking instead of fixing anything.',
      'We sat on the balcony watching the street in silence.',
      'I lost to dad in chess again, just like in childhood.',
      'He told me what my grandfather was like — I didn’t know much about him.',
      'We drank coffee together in the morning — unexpectedly calm and simple.',
      'Dad showed me how to change a lightbulb — as if I didn’t already know.',
    ],
  };

  const role = gameStore.popUpContent.person?.role;

  const contents = role ? contentMap[role] || [''] : [''];

  const content = getRandomArrayItem(contents);

  return <TextCover>{content}</TextCover>;
}

export default SpendTimeTogether;
