import React from 'react';
import TextCover from '../TextCover/TextCover';
import useGameStore from '../../../../../../pages/Menu/src/store/gameStore';
import {PeopleHealth, peopleHealthMap} from '../../../../../../../consts/character/characterProps';
import {findMatchingKeyByMaxNumber, getRandomArrayItem} from '../../../../../../../utils/common';
import {Gender} from '../../../../../../../consts/gender';

type ContentMap = {[gender in Gender]: {[health in PeopleHealth]: string[]}};

function AskAboutHealth() {
  const gameStore = useGameStore();

  const contentMap: ContentMap = {
    [Gender.Male]: {
      [PeopleHealth.Excellent]: [
        'He was in great shape, looked energetic and confident.',
        'He was full of energy, nothing was stopping him from doing his business.',
      ],
      [PeopleHealth.Good]: ['Feels fine, copes with everyday activities.', 'Nothing bothers him, his health is good.'],
      [PeopleHealth.Average]: [
        'Complained of fatigue, says that not everything comes easy.',
        'Expresses weakness, tries not to overload himself with unnecessary things.',
        'Feels tired, limited in actions.',
      ],
      [PeopleHealth.Bad]: [
        'Complains about feeling unwell, every movement is difficult.',
        'Very weakened, even simple actions are difficult.',
      ],
      [PeopleHealth.Critical]: [
        'Unable to move, looks extremely ill.',
        'The situation is critical, the condition is on the brink.',
      ],
    },
    [Gender.Female]: {
      [PeopleHealth.Excellent]: [
        'She was in great shape, looked energetic and confident.',
        'She was full of energy, nothing was stopping her from doing her business.',
      ],
      [PeopleHealth.Good]: ['Feels fine, copes with everyday activities.', 'Nothing bothers her, her health is good.'],
      [PeopleHealth.Average]: [
        'Complained of fatigue, says that not everything comes easy.',
        'Expresses weakness, tries not to overload herself with unnecessary things.',
        'Feels tired, limited in actions.',
      ],
      [PeopleHealth.Bad]: [
        'Complains about feeling unwell, every movement is difficult.',
        'Very weakened, even simple actions are difficult.',
      ],
      [PeopleHealth.Critical]: [
        'Unable to move, looks extremely ill.',
        'The situation is critical, the condition is on the brink.',
      ],
    },
  };
  const gender = gameStore.popUpContent.person?.gender;

  const contentsByGender = gender ? contentMap[gender] : contentMap[Gender.Male];

  const health = gameStore.popUpContent.person?.params.health;

  const healthLabel = health ? findMatchingKeyByMaxNumber(peopleHealthMap, health) : PeopleHealth.Average;

  const contents = healthLabel ? contentsByGender[healthLabel] : [''];

  const content = getRandomArrayItem(contents);

  return <TextCover>{content}</TextCover>;
}

export default AskAboutHealth;
