import {Icon} from '../../../../icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.Strength,
  label: 'Argue',
  conditions: [
    PeopleRelationship.Love,
    PeopleRelationship.Friendliness,
    PeopleRelationship.Neutrality,
    PeopleRelationship.Coldness,
  ],
  oneTimeImpact: [
    {value: -8, chance: 60},
    {value: -15, chance: 40},
  ],
  situationImpact: [
    {value: PeopleSituation.Conflict, chance: 50},
    {value: PeopleSituation.Resentment, chance: 40},
    {value: undefined, chance: 10},
  ],
  getDescriptions: () => {
    const contents = [
      'I argued with my mom about something small — but it somehow turned into a big deal.',
      'We disagreed, and I raised my voice. My mom just looked at me — disappointed, not angry.',
      'Told my mom she never listens — she fired back that I never think.',
      'I brought up something from the past — my mom said she’d rather forget it.',
      'My mom and I clashed over something stupid. Neither of us wanted to back down.',
      'Accused my mom of being unfair — she went quiet, then asked if I really believed that.',
      'Said she always criticizes me — my mom said she just wants what’s best for me.',
      'Tried to explain my side, but my mom kept interrupting — I gave up halfway through.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
