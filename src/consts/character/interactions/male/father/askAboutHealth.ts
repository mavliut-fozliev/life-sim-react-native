import {Icon} from '../../../../../types/icons';
import {PeopleInteraction, SpecialEffect} from '../../../../../types/people';
import {findMatchingKeyByMaxNumber, getRandomArrayItem} from '../../../../../utils/common';
import {PeopleHealth, peopleHealthMap, PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.Heart,
  label: 'Ask About Health',
  conditions: [PeopleRelationship.Love, PeopleRelationship.Friendliness, PeopleRelationship.Neutrality],
  oneTimeImpact: [
    {value: 3, chance: 70},
    {value: 4, chance: 30},
  ],
  situationImpact: [
    {value: undefined, chance: 70},
    {value: PeopleSituation.Respect, chance: 30},
  ],
  specialEffects: [SpecialEffect.ShowHealth],
  getDescriptions: ({health}) => {
    const contentMap = {
      [PeopleHealth.Excellent]: [
        'My dad was in great shape, looking energetic and confident.',
        'My dad was full of energy — nothing was stopping him from getting things done.',
      ],
      [PeopleHealth.Good]: [
        'My dad felt fine and handled his everyday activities with ease.',
        'Nothing seemed to bother my dad — his health was good.',
      ],
      [PeopleHealth.Average]: [
        'My dad complained about being tired and said not everything came easy.',
        'My dad said he felt weak and tried not to overload himself with unnecessary things.',
        'My dad was feeling tired and limited in what he could do.',
      ],
      [PeopleHealth.Bad]: [
        'My dad kept saying he felt unwell — even moving around was difficult.',
        'My dad was very weak — even simple tasks took a lot out of him.',
      ],
      [PeopleHealth.Critical]: [
        'My dad couldn’t move and looked extremely sick.',
        'It was a critical moment — my dad’s condition was on the edge.',
      ],
    };

    const healthLabel = health ? findMatchingKeyByMaxNumber(peopleHealthMap, health) : PeopleHealth.Average;

    const contents = healthLabel ? contentMap[healthLabel] : [''];

    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
