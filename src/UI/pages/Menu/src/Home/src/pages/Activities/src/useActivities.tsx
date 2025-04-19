import {useLocalizeText} from '../../../../../../../../../locales/useLocalizeText';
import {Navigation} from '../../../../../../../../../types/navigation';
import {PlaceLevel, PlaceType} from '../../../../../../../../../types/places';
import {ResourceVariant} from '../../../../../../../../../types/resources';
import {getRandomValue} from '../../../../../../../../../utils/common';
import usePlayerStore from '../../../../../playerStore';
import Activity from './Activity/Activity';

export function useActivities(navigation: Navigation) {
  const playerStore = usePlayerStore();
  const {getText} = useLocalizeText();

  const activityMap: Record<PlaceType, Record<PlaceLevel, React.JSX.Element>> = {
    [PlaceType.Gym]: {
      [PlaceLevel.One]: <></>,
      [PlaceLevel.Two]: (
        <>
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
          />
        </>
      ),
      [PlaceLevel.Three]: (
        <>
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
          />
        </>
      ),
    },
    [PlaceType.Hospital]: {
      [PlaceLevel.One]: <></>,
      [PlaceLevel.Two]: (
        <>
          <Activity
            label={getText(['places', 'activities', 'Take a check-up'])}
            navigation={navigation}
            price={500}
            resource={ResourceVariant.money}
            action={() => console.log('check up!')}
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
          />
        </>
      ),
    },
  };

  return {activityMap};
}
