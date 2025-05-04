import {View} from 'react-native';
import {ContentRef} from '../../../../../consts/general';
import useGameStore from '../../../../pages/Menu/src/store/gameStore';
import AskAboutHealth from './src/AskAboutHealth/AskAboutHealth';
import GivePraise from './src/GivePraise/GivePraise';
import SpendTimeTogether from './src/SpendTimeTogether/SpendTimeTogether';
import TalkOnThePhone from './src/TalkOnThePhone/TalkOnThePhone';
import TryToMakePeace from './src/TryToMakePeace/TryToMakePeace';

const content: {[key in ContentRef]: React.JSX.Element} = {
  [ContentRef.SpendTimeTogether]: <SpendTimeTogether />,
  [ContentRef.GivePraise]: <GivePraise />,
  [ContentRef.TalkOnThePhone]: <TalkOnThePhone />,
  [ContentRef.TryToMakePeace]: <TryToMakePeace />,
  [ContentRef.AskAboutHealth]: <AskAboutHealth />,
  [ContentRef.AskForMoney]: <View />,
  [ContentRef.Argue]: <View />,
  [ContentRef.StealMoney]: <View />,
  [ContentRef.BecomeAcquainted]: <View />,
};

function Content() {
  const gameStore = useGameStore();

  if (!gameStore.popUpContent.contentRef) {
    return <></>;
  }

  return content[gameStore.popUpContent.contentRef];
}

export default Content;
