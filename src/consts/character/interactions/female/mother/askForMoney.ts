import {Icon} from '../../../../icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship} from '../../../characterProps';
import {SpecialEffect} from '../../common';

const interaction: PeopleInteraction = {
  icon: Icon.Bills,
  label: 'Ask for Money',
  conditions: [PeopleRelationship.Love, PeopleRelationship.Friendliness],
  oneTimeImpact: [
    {value: -3, chance: 60},
    {value: -5, chance: 40},
  ],
  situationImpact: [{value: undefined, chance: 100}],
  specialEffects: [SpecialEffect.GetMoney],
  getDescriptions: () => {
    const contents = [
      'I asked my mom if she could help me out with some money — she asked if I was okay first.',
      'Asked my mom for money — she sighed, checked her purse, and handed me a few bills.',
      'Brought it up carefully — my mom said she’d help, but asked me not to make it a habit.',
      'I felt awkward asking my mom for money — she just smiled and said, “You could’ve just asked.”',
      'I asked my mom for some cash — she said okay, but reminded me it’s not unlimited.',
    ];

    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
