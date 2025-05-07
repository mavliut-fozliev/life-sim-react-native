import {Icon} from '../../../../icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.Charm,
  label: 'Give Praise',
  conditions: [
    PeopleRelationship.Love,
    PeopleRelationship.Friendliness,
    PeopleRelationship.Neutrality,
    PeopleRelationship.Coldness,
  ],
  oneTimeImpact: [
    {value: 2, chance: 60},
    {value: 3, chance: 40},
  ],
  situationImpact: [
    {value: PeopleSituation.Admiration, chance: 50},
    {value: PeopleSituation.Respect, chance: 30},
    {value: undefined, chance: 20},
  ],
  getDescriptions: () => {
    const contents = [
      'I told mom her dinner was amazing — she blushed but smiled.',
      'I mentioned to my mom how amazing she is at handling everything — like she’s got endless energy or something.',
      'I complimented my mom on how stylish she looked today — she was clearly loving it.',
      'I told my mom I’ve always admired how patient she is.',
      'I told my mom how much I admire the way she supports everyone, even when she’s going through tough times herself.',
      'I told my mom I’ve always admired how she somehow always knows the right words to make things feel okay.',
      'I praised my mom for doing an amazing job raising me — she almost teared up.',
      'My mom brings real warmth and comfort to our home, and I’ve always appreciated that.',
      'I let my mom know that her advice always comes through for me when things get tough.',
      'I praised my mom for how she takes care of grandma — she has the patience of three people.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
