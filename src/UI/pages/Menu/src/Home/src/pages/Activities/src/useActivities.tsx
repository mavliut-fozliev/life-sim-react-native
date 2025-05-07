import {PlaceLevel, PlaceType} from '../../../../../../../../../consts/places/common';
import {useLocalizeText} from '../../../../../../../../../locales/useLocalizeText';
import {Navigation} from '../../../../../../../../../types/navigation';
import {ResourceVariant} from '../../../../../../../../../consts/resources';
import {getRandomValue} from '../../../../../../../../../utils/common';
import Divider from '../../../../../../../../components/Divider/Divider';
import SectionButton from '../../../../../../../../components/SectionButton/SectionButton';
import usePlayerStore from '../../../../../store/playerStore';
import Activity from './Activity/Activity';

export function useActivities(navigation: Navigation) {
  const playerStore = usePlayerStore();
  const {getText} = useLocalizeText();

  const actionDivider = <Divider label={getText(['places', 'categories', 'Actions'])} />;

  const activityMap: Record<PlaceType, Record<PlaceLevel, React.JSX.Element>> = {
    [PlaceType.Gym]: {
      [PlaceLevel.One]: <></>,
      [PlaceLevel.Two]: (
        <>
          {actionDivider}
          <Activity
            label={getText(['places', 'activities', 'Run on a treadmill'])}
            navigation={navigation}
            price={3}
            resource={ResourceVariant.energy}
            action={() =>
              playerStore.$power.increase(
                getRandomValue([
                  {value: 1, chance: 40},
                  {value: 2, chance: 40},
                  {value: 3, chance: 20},
                ]),
              )
            }
            descriptions={[
              'Jumped on the treadmill and ran like I was late for something — felt kind of good.',
              'Hit the treadmill with music blasting — tried to outrun my own thoughts.',
              'Started running, legs complaining right away — kept going anyway.',
              'Wasn’t in the mood, but forced myself onto the treadmill — a small win.',
              'Ran on the treadmill until I forgot why I was even upset.',
              'Let the belt carry me while I tried to pretend I was outdoors.',
              'Got into a rhythm on the treadmill — almost felt like flying. Almost.',
              'Every step on the treadmill felt heavier than the last, but I didn’t quit.',
              'Chose the treadmill over doing nothing — not glamorous, but it counts.',
              'Ran while staring at the wall — somehow still better than doing nothing.',
            ]}
          />
        </>
      ),
      [PlaceLevel.Three]: (
        <>
          {actionDivider}
          <Activity
            label={getText(['places', 'activities', 'Yoga'])}
            navigation={navigation}
            price={2}
            resource={ResourceVariant.energy}
            action={() => {
              playerStore.$health.increase(
                getRandomValue([
                  {value: 1, chance: 70},
                  {value: 2, chance: 30},
                ]),
              );
              playerStore.$power.increase(
                getRandomValue([
                  {value: 1, chance: 70},
                  {value: 2, chance: 30},
                ]),
              );
            }}
            descriptions={[
              'Did some yoga — my body creaked, but my mind thanked me.',
              'Tried yoga today. Not sure if I looked graceful, but at least I tried.',
              'Held a pose longer than I thought I could — small victory.',
              'Unrolled the mat, stretched, breathed — yoga helped more than I expected.',
              'Got into a flow with yoga — slow, focused, kind of peaceful.',
              'Did yoga in silence — the stillness felt strange but nice.',
              'Tried to clear my mind with yoga. Didn’t fully work, but better than nothing.',
              'Followed a yoga video and nearly collapsed mid-pose. Still counts.',
              'Started yoga stiff as a board — ended it slightly less so.',
              'Did yoga mostly to slow down — mission accomplished.',
            ]}
          />
        </>
      ),
    },
    [PlaceType.Hospital]: {
      [PlaceLevel.One]: <></>,
      [PlaceLevel.Two]: (
        <>
          {actionDivider}
          <Activity
            label={getText(['places', 'activities', 'Take a check-up'])}
            navigation={navigation}
            price={500}
            resource={ResourceVariant.money}
            action={() => console.log('check up!')}
            descriptions={['']}
          />
        </>
      ),
      [PlaceLevel.Three]: <></>,
    },
    [PlaceType.Nightclub]: {
      [PlaceLevel.One]: <></>,
      [PlaceLevel.Two]: <></>,
      [PlaceLevel.Three]: (
        <>
          {actionDivider}
          <Activity
            label={getText(['places', 'activities', 'Just dance'])}
            navigation={navigation}
            price={1}
            resource={ResourceVariant.energy}
            action={() =>
              playerStore.$charm.increase(
                getRandomValue([
                  {value: 1, chance: 80},
                  {value: 2, chance: 20},
                ]),
              )
            }
            descriptions={[
              'Hit the dance floor and just let go — music too loud to think, perfect.',
              'Lost myself in the beat — dancing like nobody was watching (though they probably were).',
              'Moved with the crowd, lights flashing — didn’t care how I looked, just danced.',
              'Danced like I owned the floor — even if I tripped once or twice.',
              'Body on autopilot, mind somewhere else — dancing fixed more than talking ever could.',
              'Just danced — no phone, no thinking, just rhythm and sweat.',
              'Let the bass carry me — every beat felt like freedom.',
              'Didn’t plan to dance, but the music pulled me in — couldn’t help it.',
              'The lights, the noise, the crowd — all disappeared once I started dancing.',
              'Wasn’t the best dancer out there, but definitely had the most fun.',
            ]}
          />
          <SectionButton
            label={getText(['places', 'activities', "Go to the club's secret section"])}
            onPress={() => {
              console.log('Secret section');
            }}
          />
        </>
      ),
    },
  };

  return {activityMap};
}
