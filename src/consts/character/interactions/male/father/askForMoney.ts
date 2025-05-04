import {Icon} from '../../../../../types/icons';
import {PeopleInteraction, SpecialEffect} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship} from '../../../characterProps';

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
      'Told my dad I needed help financially — he sighed but pulled out his wallet.',
      'I hesitated, then asked my dad if he could lend me some cash — he didn’t say much, just nodded.',
      'I asked for some help — my dad said this was the last time, but I’ve heard that before.',
      'Said I needed money for something important — my dad looked skeptical but didn’t say no.',
      'My dad asked how much before I even finished the sentence — I guess he saw it coming.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
