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
  getDescriptions: ({name}) => {
    const contents = [
      `Met a woman named ${name} — she had a warm smile, easy to talk to.`,
      `Started talking to ${name} — didn’t expect her to be so open.`,
      `${name} struck up a conversation — I appreciated that.`,
      `I introduced myself to ${name} — she seemed kind, maybe a little cautious.`,
      `Bumped into ${name} — turned into an actual conversation.`,
      `Met ${name} by chance — something about her made it easy to open up.`,
      `I said hello, ${name} answered with a laugh — good start.`,
      `Introduced myself to ${name} — wasn’t sure how it’d go, but she was lovely.`,
    ];

    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
