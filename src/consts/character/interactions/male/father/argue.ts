import {Icon} from '../../../../../types/icons';
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
      'I argued with my dad over something dumb — and somehow it spiraled out of control.',
      'We disagreed, and my dad gave me that stern look — like I crossed a line.',
      'Told my dad he never understands me — he said maybe I never try to be understood.',
      'Brought up old stuff — my dad said it’s time to move on, but I wasn’t ready to.',
      'My dad and I clashed — both too stubborn to back down.',
      'Accused my dad of always being distant — he looked hurt but said nothing.',
      'Said he always expects too much — my dad said someone has to.',
      'Tried to talk it through, but my dad shut it down before I finished.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
