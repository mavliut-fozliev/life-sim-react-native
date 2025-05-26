import React, {ReactNode} from 'react';
import SectionButton from '../../../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../../../types/navigation';
import usePlayerStore from '../../../../../../store/playerStore';
import {ResourceVariant} from '../../../../../../../../../../consts/resources';
import {useNavigate} from '../../../../../../../../../../hooks/useNavigate';
import {useIcon} from '../../../../../../../../../../icons/useIcon';
import {Icon} from '../../../../../../../../../../consts/icons';
import {useStoreHooks} from '../../../../../../store/storeHooks';
import {getRandomArrayItem} from '../../../../../../../../../../utils/common';
import useGameStore from '../../../../../../store/gameStore';
import {Text} from 'react-native';

type ActivityProps = {
  label: string;
  navigation: Navigation;
  price: Array<{resource: ResourceVariant; amount: number}>;
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

function Activity({label, navigation, price, action, descriptions}: ActivityProps) {
  const playerStore = usePlayerStore();
  const gameStore = useGameStore();
  const navigate = useNavigate(navigation);
  const {addItemToHistory} = useStoreHooks();

  const resourceMap: ResourceMap = {
    [ResourceVariant.money]: {
      state: playerStore.money,
      decrease: playerStore.$money.decrease,
      icon: useIcon(Icon.Bills, {size: 16}),
    },
    [ResourceVariant.energy]: {
      state: playerStore.energy,
      decrease: playerStore.$energy.decrease,
      icon: useIcon(Icon.Energy, {size: 16}),
    },
  };

  const isNotEnough = price.some(p => resourceMap[p.resource].state < p.amount);

  const handlePress = () => {
    if (isNotEnough) {
      return;
    }

    action();
    price.forEach(p => {
      const resourceObj = resourceMap[p.resource];
      resourceObj.decrease(p.amount);
    });

    // set popup content and history
    const content = getRandomArrayItem(descriptions) || descriptions[0];
    gameStore.$popUpContent.set({
      content,
    });
    addItemToHistory(content);

    navigate.backToHome();
  };

  return (
    <SectionButton
      label={label}
      onPress={handlePress}
      disabled={isNotEnough}
      icon={
        <>
          {price.map(p => (
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
