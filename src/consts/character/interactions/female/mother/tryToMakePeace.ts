import {Icon} from '../../../../../types/icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.People,
  label: 'Try to Make Peace',
  conditions: [PeopleRelationship.Indifference],
  oneTimeImpact: [
    {value: 5, chance: 80},
    {value: 30, chance: 20},
  ],
  situationImpact: [
    {value: PeopleSituation.Respect, chance: 80},
    {value: undefined, chance: 20},
  ],
  getDescriptions: () => {
    const contents = [
      'Tried to make amends — mom listened but replied coldly.',
      'We talked about the past argument. My mom said it was hard for her too.',
      'I apologized, and my mom nodded silently. I hope that means something.',
      'Suggested we let the fight go — mom softened, even smiled.',
      'I asked my mom for forgiveness. She was quiet for a while, then said, “I’ll think about it.”',
      'Mom gave me a hard time about why I don’t call more often.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
