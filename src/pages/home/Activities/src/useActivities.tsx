import {useLocalizeText} from '../../../../shared/locales/useLocalizeText';
import {Navigation} from '../../../../shared/types/navigation';
import {getRandomValue} from '../../../../shared/utils/common';
import usePlayerStore from '../../../../shared/store/playerStore';
import Activity from './Activity/Activity';
import Divider from '../../../../shared/ui/components/Divider/Divider';
import SectionButton from '../../../../shared/ui/components/SectionButton/SectionButton';
import {PlaceLevel, PlaceType} from '../../../../features/places/common';
import {activityData} from '../../../../features/places/activities/activityData';
import {activityDescriptions} from '../../../../features/places/activities/descriptions';
import {UpdateByKeysParams} from '../../../../shared/types/store';

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
          const params: UpdateByKeysParams = [];
          activity.action.forEach(act => {
            params.push({itemKeys: ['person', act.stat], value: getRandomValue(act.chances)});
          });
          playerStore.$person.updateByKeys(params);
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
