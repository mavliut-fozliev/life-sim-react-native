import {Icon} from '../../../../../shared/icons/icons';
import {PeopleInteraction} from '../../../../../shared/types/people';
import {getRandomArrayItem} from '../../../../../shared/utils/common';
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
      'My mother and I were looking at old family photographs.',
      'We were flipping through old albums, and mom laughed remembering what I used to be like.',
      'My mom and I went shopping.',
      'Mom baked a pie and I helped — or maybe just got in the way.',
      'My mom and I were just sitting in the kitchen, drinking tea and talking about life.',
      'Mom told me a childhood story I had never heard before.',
      'I helped mom sort through old stuff — it took the whole evening.',
      'I watched my mom’s favorite show with her, and she kept commenting on everything.',
      'Mom made me try on old clothes just for a laugh.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
