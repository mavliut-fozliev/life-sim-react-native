import {Icon} from '../../../../icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship, PeopleSituation} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.People,
  label: 'Spend Time Together',
  conditions: [PeopleRelationship.Love, PeopleRelationship.Friendliness, PeopleRelationship.Neutrality],
  oneTimeImpact: [
    {value: 3, chance: 70},
    {value: 5, chance: 30},
  ],
  situationImpact: [
    {value: undefined, chance: 70},
    {value: PeopleSituation.Trust, chance: 30},
  ],
  getDescriptions: () => {
    const contents = [
      'Dad turned on the game and invited me to watch — a rare moment.',
      'My father and I were messing around in the garage, mostly talking instead of fixing anything.',
      'My father and I sat on the balcony and silently looked out at the street.',
      'I lost to dad in chess again, just like in childhood.',
      'My father told me what my grandfather was like - I knew little about him.',
      'In the morning, my dad and I drank coffee together - unexpectedly calmly and simply.',
      'Dad showed me how to change a lightbulb — as if I didn’t already know.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
