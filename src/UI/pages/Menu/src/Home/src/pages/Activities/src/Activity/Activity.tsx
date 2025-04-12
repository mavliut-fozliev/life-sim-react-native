import React, {ReactNode} from 'react';
import SectionButton from '../../../../../../../../../components/SectionButton/SectionButton';
import {Navigation} from '../../../../../../../../../../types/navigation';
import usePlayerStore from '../../../../../../playerStore';
import {ResourceVariant} from '../../../../../../../../../../types/resources';
import Bills from '../../../../../../../../../../icons/Bills';
import Energy from '../../../../../../../../../../icons/Energy';
import {useNavigate} from '../../../../../../../../../../hooks/useNavigate';

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
    money: {
      state: playerStore.money,
      decrease: playerStore.$money.decrease,
      icon: <Bills size={20} />,
    },
    energy: {
      state: playerStore.energy,
      decrease: playerStore.$energy.decrease,
      icon: <Energy size={20} />,
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
