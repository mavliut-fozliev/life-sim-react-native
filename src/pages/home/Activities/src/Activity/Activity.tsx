import React, {ReactNode} from 'react';
import {Navigation} from '../../../../../shared/types/navigation';
import {ResourceVariant} from '../../../../../shared/constants/resources';
import {useNavigate} from '../../../../../shared/hooks/useNavigate';
import {Icon} from '../../../../../shared/icons/icons';
import {useStoreHooks} from '../../../../../shared/store/storeHooks';
import {getRandomArrayItem} from '../../../../../shared/utils/common';
import useGameStore from '../../../../../shared/store/gameStore';
import {Text} from 'react-native';
import SectionButton from '../../../../../shared/ui/components/SectionButton/SectionButton';
import {useIcon} from '../../../../../shared/icons/useIcon';
import {ActivityItem} from '../../../../../features/places/types';
import {useLocalizeText} from '../../../../../shared/locales/useLocalizeText';
import {activityDescriptions} from '../../../../../features/places/activities/descriptions';
import {isEnoughToDoActivity, updatePersonByActivity} from '../../../../../features/places/helpers';
import {useUpdatePerson} from '../../../../../features/character/hooks/useUpdatePerson';
import {usePlayer} from '../../../../../features/character/hooks/usePlayer';

type ActivityProps = {
  navigation: Navigation;
  activity: ActivityItem;
};

type ResourceMap = {
  [K in ResourceVariant]: {
    resource: string;
    icon: ReactNode;
  };
};

function Activity({navigation, activity}: ActivityProps) {
  const player = usePlayer();
  const gameStore = useGameStore();
  const navigate = useNavigate(navigation);
  const {addItemToHistory} = useStoreHooks();
  const {translate} = useLocalizeText();
  const {savePerson} = useUpdatePerson();

  const resourceMap: ResourceMap = {
    [ResourceVariant.money]: {
      resource: 'money',
      icon: useIcon(Icon.Bills, {size: 16}),
    },
    [ResourceVariant.energy]: {
      resource: 'energy',
      icon: useIcon(Icon.Energy, {size: 16}),
    },
  };

  const isEnough = isEnoughToDoActivity(activity, player);

  const handlePress = () => {
    updatePersonByActivity(activity, player);
    savePerson(player);

    // set popup content and history
    const descriptions = activityDescriptions[activity.label] || [''];
    const content = getRandomArrayItem(descriptions) || descriptions[0];
    gameStore.$popUpContent.set({
      content,
    });
    addItemToHistory(content);

    navigate.backToHome();
  };

  return (
    <SectionButton
      label={translate(activity.label)}
      onPress={handlePress}
      disabled={!isEnough}
      icon={
        <>
          {activity.price.map(p => (
            <React.Fragment key={p.resource}>
              <Text>{p.amount.toString()}</Text>
              {resourceMap[p.resource].icon}
            </React.Fragment>
          ))}
        </>
      }
    />
  );
}

export default Activity;
