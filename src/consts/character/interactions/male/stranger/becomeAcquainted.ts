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
      `Met a guy named ${name} — we started chatting over something random.`,
      `Got introduced to ${name} — seemed chill, we clicked faster than I expected.`,
      `Ran into ${name} at the store — ended up talking longer than planned.`,
      `Didn’t know what to say at first, but ${name} kept the conversation going.`,
      `We exchanged a few words — turned out ${name} isn’t as serious as he looks.`,
      `Started talking to a guy named ${name} — somehow we ended up joking around.`,
      `${name} offered help with something — that’s how we started talking.`,
      `Met ${name} through a mutual friend — easygoing guy, felt like I’ve known him longer.`,
      `Introduced myself to ${name} — not sure what he thought, but he smiled.`,
    ];

    return getRandomArrayItem(contents) || contents[0];
  },
};

export default interaction;
