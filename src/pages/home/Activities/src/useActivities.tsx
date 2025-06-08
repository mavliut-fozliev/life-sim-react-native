import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import {Navigation} from '../../../../shared/types/navigation';
import Activity from './Activity/Activity';
import Divider from '../../../../shared/ui/components/Divider/Divider';
import SectionButton from '../../../../shared/ui/components/SectionButton/SectionButton';
import {PlaceLevel, PlaceType} from '../../../../features/places/common';
import {activityData} from '../../../../features/places/activities/activityData';

export function useActivities(navigation: Navigation) {
  const {translate} = useLocalizeText();

  const actionDivider = <Divider label={translate('Actions')} />;

  const getActivityComponents = (placeType: PlaceType, placeLevel: PlaceLevel) =>
    activityData[placeType][placeLevel].map((activity, index) => (
      <Activity key={index.toString()} navigation={navigation} activity={activity} />
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
