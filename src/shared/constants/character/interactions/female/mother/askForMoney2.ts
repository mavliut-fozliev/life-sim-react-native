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
      'Told my mom things were tight — she didn’t love hearing it, but she came through.',
      'My mom gave me a small lecture before helping — classic.',
      'Told my mom I was short on cash — she gave me that “again?” look, but still helped.',
    ];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
