import {PlaceLevel, PlaceType} from '../../../../shared/constants/places/common';
import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import {Navigation} from '../../../../shared/types/navigation';
import {getRandomValue} from '../../../../shared/utils/common';
import usePlayerStore from '../../../../shared/store/playerStore';
import Activity from './Activity/Activity';
import {activityData} from '../../../../shared/constants/places/activities/data';
import {activityDescriptions} from '../../../../shared/constants/places/activities/descriptions';
import Divider from '../../../../shared/ui/components/Divider/Divider';
import SectionButton from '../../../../shared/ui/components/SectionButton/SectionButton';

export function useActivities(navigation: Navigation) {
  const playerStore = usePlayerStore();
  const {translate} = useLocalizeText();

  const actionDivider = <Divider label={translate('Actions')} />;

  const getActivityComponents = (placeType: PlaceType, placeLevel: PlaceLevel) =>
    activityData[placeType][placeLevel].map((activity, index) => (
      <Activity
        key={index.toString()}
        label={translate(activity.label)}
        navigation={navigation}
        price={activity.price}
        action={() => {
          activity.action.forEach(act => {
            playerStore[`$${act.stat}`].increase(getRandomValue(act.chances));
          });
        }}
        descriptions={activityDescriptions[activity.label] || ['']}
      />
    ));

  const activityMap: Record<PlaceType, Record<PlaceLevel, React.JSX.Element>> = {
    [PlaceType.Gym]: {
      [PlaceLevel.One]: <></>,
      [PlaceLevel.Two]: (
        <>
          {actionDivider}
          {getActivityComponents(PlaceType.Gym, PlaceLevel.Two)}
        </>
      ),
      [PlaceLevel.Three]: (
        <>
          {actionDivider}
          {getActivityComponents(PlaceType.Gym, PlaceLevel.Three)}
        </>
      ),
    },
    [PlaceType.Hospital]: {
      [PlaceLevel.One]: <></>,
      [PlaceLevel.Two]: (
        <>
          {actionDivider}
          {getActivityComponents(PlaceType.Hospital, PlaceLevel.Two)}
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
          {getActivityComponents(PlaceType.Nightclub, PlaceLevel.Three)}
          <SectionButton
            label={translate("Go to the club's secret section")}
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
