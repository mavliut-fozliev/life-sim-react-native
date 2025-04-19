import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgProps} from './types';

type StrengthProps = SvgProps & {color?: string; strokeWidth?: number};

const Strength = (props: StrengthProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color || '#FFEF00'}
    viewBox="0 0 48 48">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={props.strokeWidth || 2}
      d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38 5.56.59 9.98 5.28 10.26 10.86.07 1.47-.13 2.88-.56 4.19-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7-8.57 6.13L15 14M17.44 17.13 22 34"
    />
  </Svg>
);

export default Strength;
