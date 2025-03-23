import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgProps} from '../types';

const Russia = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width={props.size} height={props.size}>
    <Path fill="#fff" d="M0 0h640v160H0z" />
    <Path fill="#0039a6" d="M0 160h640v160H0z" />
    <Path fill="#d52b1e" d="M0 320h640v160H0z" />
  </Svg>
);
export default Russia;
