import {Icon} from '../../../../../types/icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.People,
  label: 'Talk on the Phone',
  conditions: [
    PeopleRelationship.Love,
    PeopleRelationship.Friendliness,
    PeopleRelationship.Neutrality,
    PeopleRelationship.Coldness,
  ],
  oneTimeImpact: [
    {value: 3, chance: 50},
    {value: 4, chance: 50},
  ],
  situationImpact: [
    {value: PeopleSituation.Admiration, chance: 50},
    {value: undefined, chance: 50},
  ],
  getDescriptions: () => {
    const contents = [
      'Chatted with mom on the phone — she shared some new recipes.',
      'Called mom just to hear her voice.',
      'Talked for a long time about the past with my mother, remembering how little I was.',
      'I asked my mom how she’s doing — she said “fine” at first, but then she opened up.',
      'Mom gave me a hard time about why I don’t call more often.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
