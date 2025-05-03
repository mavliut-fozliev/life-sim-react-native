import {Icon} from '../types/icons';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Bills from './Bills';
import Charm from './Charm';
import Energy from './Energy';
import Heart from './Heart';
import MenuIcon from './MenuIcon';
import People from './People';
import Radio from './Radio';
import Star from './Star';
import Strength from './Strength';

export function useIcon<P = any>(sprite: Icon, props?: P): React.JSX.Element {
  switch (sprite) {
    case Icon.Bills:
      return <Bills {...props} />;
    case Icon.Energy:
      return <Energy {...props} />;
    case Icon.ArrowRight:
      return <ArrowRight {...props} />;
    case Icon.ArrowLeft:
      return <ArrowLeft {...props} />;
    case Icon.Radio:
      return <Radio {...props} />;
    case Icon.Strength:
      return <Strength {...props} />;
    case Icon.Heart:
      return <Heart {...props} />;
    case Icon.Star:
      return <Star {...props} />;
    case Icon.Charm:
      return <Charm {...props} />;
    case Icon.MenuIcon:
      return <MenuIcon {...props} />;
    case Icon.People:
      return <People {...props} />;
    default:
      return <></>;
  }
}
