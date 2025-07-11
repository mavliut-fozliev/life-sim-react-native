import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgProps} from '../types';

const ArrowLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    strokeWidth={1}
    viewBox="-1 3 28 26"
    width={props.size}
    height={props.size}>
    <Path d="M13.114 2.887C5.871 2.887 0 8.758 0 16s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113S20.356 2.887 13.114 2.887zm0 25.177C6.461 28.064 1.049 22.652 1.049 16S6.461 3.937 13.114 3.937c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z" />
    <Path d="m12.318 10.363-.742-.742L5.197 16l6.379 6.379.742-.742-5.113-5.113h12.726v-1.049H7.205z" />
  </Svg>
);
export default ArrowLeft;
