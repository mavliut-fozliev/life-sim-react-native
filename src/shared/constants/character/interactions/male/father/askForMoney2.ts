import {Icon} from '../../../../../icons/icons';
import {PeopleInteraction} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship} from '../../../characterProps';
import {SpecialEffect} from '../../common';

const interaction: PeopleInteraction = {
  icon: Icon.Bills,
  label: 'Ask for Money',
  conditions: [PeopleRelationship.Neutrality],
  oneTimeImpact: [{value: -5, chance: 100}],
  situationImpact: [{value: undefined, chance: 100}],
  specialEffects: [SpecialEffect.GetMoney],
  getDescriptions: () => {
    const contents = [
      'I asked my dad for some money — he raised an eyebrow and asked what it was for.',
      'Asked my dad for money — he gave me a short lecture before handing it over.',
      'Brought up money — my dad said things aren’t easy for him either.',
      'Told my dad I was short on cash — he asked if I’ve been managing things responsibly.',
      'I asked my dad for money — he didn’t like it, but he helped anyway.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
