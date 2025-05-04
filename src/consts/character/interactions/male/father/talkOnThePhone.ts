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
      'Called dad — we were silent at first, then got talking.',
      'Dad talked about work — he sounded tired but calm.',
      'Asked dad for advice — as always, brief but spot-on.',
      'I just chatted with my dad about little things — the weather, football, life.',
      'Dad didn’t recognize my voice right away — we both laughed.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
