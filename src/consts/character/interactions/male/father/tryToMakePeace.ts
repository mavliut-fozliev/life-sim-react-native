import {Icon} from '../../../../icons';
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
      'Said I was wrong. Dad listened, but didn’t say a word.',
      'Tried to reconnect. Dad muttered something about “the past being past.”',
      'I offered to talk heart-to-heart with my dad — he resisted at first, but eventually agreed.',
      'Admitted my mistakes. Dad looked surprised but nodded with respect.',
      'I tried to smooth things over with my dad — it was awkward, but he appreciated the effort.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
