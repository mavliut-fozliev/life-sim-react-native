import {Icon} from '../../../../icons';
import {PeopleInteraction} from '../../../../../types/people';
import {findMatchingKeyByMaxNumber, getRandomArrayItem} from '../../../../../utils/common';
import {PeopleHealth, peopleHealthMap, PeopleRelationship, PeopleSituation} from '../../../characterProps';
import {SpecialEffect} from '../../common';

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
        'My mom was in great shape, looking energetic and confident.',
        'My mom was full of energy — nothing was stopping her from getting things done.',
      ],
      [PeopleHealth.Good]: [
        'My mom felt fine and handled her everyday activities with ease.',
        'Nothing seemed to bother my mom — her health was good.',
      ],
      [PeopleHealth.Average]: [
        'My mom complained about being tired and said not everything came easy.',
        'My mom said she felt weak and tried not to overload herself with unnecessary things.',
        'My mom was feeling tired and limited in what she could do.',
      ],
      [PeopleHealth.Bad]: [
        'My mom kept saying she felt unwell — even moving around was difficult.',
        'My mom was very weak — even simple tasks took a lot out of her.',
      ],
      [PeopleHealth.Critical]: [
        'My mom couldn’t move and looked extremely sick.',
        'It was a critical moment — my mom’s condition was on the edge.',
      ],
    };

    const healthLabel = health ? findMatchingKeyByMaxNumber(peopleHealthMap, health) : PeopleHealth.Average;

    const contents = healthLabel ? contentMap[healthLabel] : [''];

    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
