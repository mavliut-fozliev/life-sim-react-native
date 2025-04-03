import React from 'react';
import Bills from '../../../../../../../icons/Bills';
import Energy from '../../../../../../../icons/Energy';
import StatTemplate from '../../../../../../components/StatTemplate/StatTemplate';

type VariantType = 'money' | 'energy';

type ResourceProps = {name: VariantType; value: number};

const icons: {[K in VariantType]: React.JSX.Element} = {
  money: <Bills size={26} />,
  energy: <Energy size={26} />,
};

const variantStyles: {[K in VariantType]: string} = {
  money: 'green',
  energy: '#0600B2',
};

function formatNumber(num: number): string {
  const units = ['K', 'M', 'B', 'T'];
  let i = 0;
  let formattedNum = num;

  if (num < 1000) {
    return num.toString();
  }

  for (; formattedNum >= 1000 && i < units.length - 1; i++) {
    formattedNum /= 1000;
  }

  const rounded = Math.floor(formattedNum * 100) / 100;

  return `${rounded}${units[i]}`;
}

function Resource({name, value}: ResourceProps) {
  return <StatTemplate color={variantStyles[name]} value={formatNumber(value)} icon={icons[name]} />;
}

export default Resource;
