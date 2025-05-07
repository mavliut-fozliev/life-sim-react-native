import React from 'react';
import StatTemplate from '../StatTemplate/StatTemplate';
import {ResourceVariant} from '../../../consts/resources';
import {useIcon} from '../../../icons/useIcon';
import {Icon} from '../../../consts/icons';

type ResourceProps = {name: ResourceVariant; value: number};

const variantStyles: {[K in ResourceVariant]: string} = {
  [ResourceVariant.money]: 'green',
  [ResourceVariant.energy]: '#0600B2',
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
  const icons: {[K in ResourceVariant]: React.JSX.Element} = {
    [ResourceVariant.money]: useIcon(Icon.Bills, {size: 26}),
    [ResourceVariant.energy]: useIcon(Icon.Energy, {size: 26}),
  };

  return <StatTemplate color={variantStyles[name]} value={formatNumber(value)} icon={icons[name]} />;
}

export default Resource;
