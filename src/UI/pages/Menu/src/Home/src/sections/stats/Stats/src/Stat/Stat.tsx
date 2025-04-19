import React from 'react';
import Heart from '../../../../../../../../../../../icons/Heart';
import Strength from '../../../../../../../../../../../icons/Strength';
import Charm from '../../../../../../../../../../../icons/Charm';
import StatTemplate from '../../../../../../../../../../components/StatTemplate/StatTemplate';

type VariantType = 'health' | 'power' | 'age' | 'charm';

type StatProps = {name: VariantType; value: number};

const icons: {[K in VariantType]: React.JSX.Element} = {
  health: <Heart size={26} borderColor="#000" filling="#FF0909" />,
  power: <Strength size={26} />,
  age: <Heart size={26} borderColor="#000" filling="#1B1B9C" />,
  charm: <Charm size={26} />,
};

const variantStyles: {[K in VariantType]: string} = {
  health: '#FF3D3D',
  power: '#E6B800',
  age: '#4A4A4A',
  charm: '#9E05AF',
};

function Stat({name, value}: StatProps) {
  return <StatTemplate color={variantStyles[name]} value={value} icon={icons[name]} />;
}

export default Stat;
