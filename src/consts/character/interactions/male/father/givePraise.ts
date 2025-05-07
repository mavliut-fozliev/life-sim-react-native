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
      'Told dad I respect his work ethic — he brushed it off, but I could tell he liked it.',
      'I praised my dad for fixing the shelf — it looks better than new.',
      'I said I’ve always seen my dad as a strong man — he went quiet for a while.',
      'I mentioned how great his sense of humor is — and dad laughed in return.',
      'I thanked my dad for everything he taught me.',
      'I let my dad know I’m proud of the man he’s become.',
      'I mentioned how my dad’s persistence has always been an example for me.',
      'I praised my dad for how he solves problems on the fly.',
      'I noted my dad’s real talent for fixing just about anything.',
      'I told my dad I’ve always felt safe around him.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
