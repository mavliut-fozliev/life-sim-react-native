import React from 'react';
import Heart from '../../../../../../../../../icons/Heart';
import Strength from '../../../../../../../../../icons/Strength';
import StatTemplate from '../../../../../../../../components/StatTemplate/StatTemplate';

type VariantType = 'health' | 'power' | 'age';

type StatProps = {name: VariantType; value: number};

const icons: {[K in VariantType]: React.JSX.Element} = {
  health: <Heart size={26} borderColor="#000" filling="#FF0909" />,
  power: <Strength size={26} color="#FFEF00" strokeWidth={2} />,
  age: <Heart size={26} borderColor="#000" filling="#1B1B9C" />,
};

const variantStyles: {[K in VariantType]: string} = {
  health: '#FF3D3D',
  power: '#E6B800',
  age: '#4A4A4A',
};

function Stat({name, value}: StatProps) {
  return <StatTemplate color={variantStyles[name]} value={value} icon={icons[name]} />;
}

export default Stat;
