import {Icon} from '../../../../../types/icons';
import {PeopleInteraction, SpecialEffect} from '../../../../../types/people';
import {getRandomArrayItem} from '../../../../../utils/common';
import {PeopleRelationship} from '../../../characterProps';

const interaction: PeopleInteraction = {
  icon: Icon.Bills,
  label: 'Become Acquainted',
  conditions: [PeopleRelationship.Neutrality],
  oneTimeImpact: [{value: 0, chance: 100}],
  situationImpact: [{value: undefined, chance: 100}],
  specialEffects: [SpecialEffect.MakeFamiliar],
  getDescriptions: () => {
    const contents = [''];
    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
