import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {SvgProps} from './types';

type StarProps = SvgProps;

const Star = (props: StarProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={props.size} height={props.size}>
    <G clipPath="url(#a)">
      <Path
        fill="#FFC44D"
        d="M23.763 20.142s1.8 7.3 2.32 9.29c.49 1.87-1.01 1.82-1.93 1.18-1.03-.72-8.15-5.81-8.15-5.81s-7.18 5.13-8.17 5.82c-.85.59-2.43.72-1.79-1.17.46-1.59 2.71-9.31 2.71-9.31s-6.57-4.81-7.27-5.35c-.7-.53-.73-2.03.53-2.14 1.25-.1 9.33-.79 9.33-.79s3.13-8.67 3.55-9.82c.41-1.37 1.77-1.4 2.32-.02l3.96 9.84s7.63.68 8.78.78c1.26.08 1.36 1.64.54 2.27-.81.64-6.73 5.23-6.73 5.23Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.32}
        d="m17.216 2.022 3.958 9.842s7.632.679 8.781.775c1.26.08 1.358 1.64.541 2.276l-6.735 5.226s1.8 7.297 2.322 9.285c.49 1.873-1.013 1.823-1.927 1.184-1.035-.721-8.155-5.813-8.155-5.813s-7.176 5.13-8.164 5.82c-.85.592-2.437.72-1.797-1.163.465-1.59 2.715-9.313 2.715-9.313s-6.576-4.812-7.274-5.35c-.702-.535-.724-2.031.528-2.138l9.334-.79s3.132-8.673 3.553-9.82c.408-1.371 1.767-1.402 2.32-.021Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Star;
