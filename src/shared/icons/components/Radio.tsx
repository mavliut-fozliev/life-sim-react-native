import * as React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {SvgProps} from '../types';

type RadioProps = SvgProps & {selected?: boolean};

const Radio = (props: RadioProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={props.size} height={props.size}>
    {props.selected ? (
      <G fill="#080341">
        <Path
          fillRule="evenodd"
          d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0 1.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          clipRule="evenodd"
        />
        <Circle cx={12} cy={12} r={5.25} />
      </G>
    ) : (
      <Path
        fill="#080341"
        fillRule="evenodd"
        d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0 1.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        clipRule="evenodd"
      />
    )}
  </Svg>
);
export default Radio;
