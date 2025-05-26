import {PlaceLevel, PlaceType} from '../../../../../../../../../consts/places/common';
import {useLocalizeText} from '../../../../../../../../../locales/useLocalizeText';
import {Navigation} from '../../../../../../../../../types/navigation';
import {getRandomValue} from '../../../../../../../../../utils/common';
import Divider from '../../../../../../../../components/Divider/Divider';
import SectionButton from '../../../../../../../../components/SectionButton/SectionButton';
import usePlayerStore from '../../../../../store/playerStore';
import Activity from './Activity/Activity';
import {activityData} from '../../../../../../../../../consts/places/activities/data';
import {activityDescriptions} from '../../../../../../../../../consts/places/activities/descriptions';

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
            playerStore[`$${act.parameter}`].increase(getRandomValue(act.chances));
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
