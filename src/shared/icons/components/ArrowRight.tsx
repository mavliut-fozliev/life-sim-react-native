import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgProps} from '../types';

const ArrowRight = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 16 16">
    <Path
      d="M11.532 1048.341H9.536v-9h-9v-2h11z"
      style={{
        fill: '#373737',
        fillOpacity: 1,
        fillRule: 'evenodd',
        stroke: 'none',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      transform="rotate(45 1254.793 524.438)"
    />
  </Svg>
);
export default ArrowRight;
