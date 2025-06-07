import {Icon} from './icons';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import Bills from './components/Bills';
import Charm from './components/Charm';
import Energy from './components/Energy';
import Heart from './components/Heart';
import MenuIcon from './components/MenuIcon';
import People from './components/People';
import Radio from './components/Radio';
import Star from './components/Star';
import Strength from './components/Strength';

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
