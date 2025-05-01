import React, {ReactNode} from 'react';
import SectionButton from '../../../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../../../types/navigation';
import usePlayerStore from '../../../../../../store/playerStore';
import {ResourceVariant} from '../../../../../../../../../../types/resources';
import {useNavigate} from '../../../../../../../../../../hooks/useNavigate';
import {useIcon} from '../../../../../../../../../../icons/useIcon';
import {Icon} from '../../../../../../../../../../types/icons';

type ActivityProps = {
  label: string;
  navigation: Navigation;
  price: number;
  resource: ResourceVariant;
  action: () => void;
};

type ResourceMap = {
  [K in ResourceVariant]: {
    state: number;
    decrease: (value: number) => void;
    icon: ReactNode;
  };
};

function Activity({label, navigation, price, resource, action}: ActivityProps) {
  const playerStore = usePlayerStore();
  const navigate = useNavigate(navigation);

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

  return (
    <SectionButton
      label={label}
      onPress={() => {
        if (resourceObj.state < price) {
          return;
        }
        action();
        resourceObj.decrease(price);
        navigate.backToHome();
      }}
      disabled={resourceObj.state < price}
      icon={resourceObj.icon}
      iconText={price.toString()}
    />
  );
}

export default Activity;
