import React from 'react';
import {Icon} from '../../../../../../../../../shared/icons/icons';
import {useIcon} from '../../../../../../../../../shared/icons/useIcon';
import StatTemplate from '../../../../../../../../../shared/ui/components/StatTemplate/StatTemplate';

type VariantType = 'health' | 'power' | 'age' | 'charm';

type StatProps = {name: VariantType; value: number};

const variantStyles: {[K in VariantType]: string} = {
  health: '#FF3D3D',
  power: '#E6B800',
  age: '#4A4A4A',
  charm: '#9E05AF',
};

function Stat({name, value}: StatProps) {
  const icons: {[K in VariantType]: React.JSX.Element} = {
    health: useIcon(Icon.Heart, {size: 26, borderColor: '#000', filling: '#FF0909'}),
    power: useIcon(Icon.Strength, {size: 26}),
    age: useIcon(Icon.Heart, {size: 26, borderColor: '#000', filling: '#1B1B9C'}),
    charm: useIcon(Icon.Charm, {size: 26}),
  };

  return <StatTemplate color={variantStyles[name]} value={value} icon={icons[name]} />;
}

export default Stat;
