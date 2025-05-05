import React, {ReactNode} from 'react';
import SectionButton from '../../../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../../../types/navigation';
import usePlayerStore from '../../../../../../store/playerStore';
import {ResourceVariant} from '../../../../../../../../../../types/resources';
import {useNavigate} from '../../../../../../../../../../hooks/useNavigate';
import {useIcon} from '../../../../../../../../../../icons/useIcon';
import {Icon} from '../../../../../../../../../../types/icons';
import {useStoreHooks} from '../../../../../../store/storeHooks';
import {getRandomArrayItem} from '../../../../../../../../../../utils/common';
import useGameStore from '../../../../../../store/gameStore';

type ActivityProps = {
  label: string;
  navigation: Navigation;
  price: number;
  resource: ResourceVariant;
  action: () => void;
  descriptions: string[];
};

type ResourceMap = {
  [K in ResourceVariant]: {
    state: number;
    decrease: (value: number) => void;
    icon: ReactNode;
  };
};

function Activity({label, navigation, price, resource, action, descriptions}: ActivityProps) {
  const playerStore = usePlayerStore();
  const gameStore = useGameStore();
  const navigate = useNavigate(navigation);
  const {addToHistory} = useStoreHooks();

  const resourceMap: ResourceMap = {
    [ResourceVariant.money]: {
      state: playerStore.money,
      decrease: playerStore.$money.decrease,
      icon: useIcon(Icon.Bills, {size: 20}),
    },
    [ResourceVariant.energy]: {
      state: playerStore.energy,
      decrease: playerStore.$energy.decrease,
      icon: useIcon(Icon.Energy, {size: 20}),
    },
  };

  const resourceObj = resourceMap[resource];

  const handlePress = () => {
    if (resourceObj.state < price) {
      return;
    }

    action();
    resourceObj.decrease(price);

    // set popup content and history
    const content = getRandomArrayItem(descriptions) || descriptions[0];
    gameStore.$popUpContent.set({
      content,
    });
    addToHistory(content);

    navigate.backToHome();
  };

  return (
    <SectionButton
      label={label}
      onPress={handlePress}
      disabled={resourceObj.state < price}
      icon={resourceObj.icon}
      iconText={price.toString()}
    />
  );
}

export default Activity;
