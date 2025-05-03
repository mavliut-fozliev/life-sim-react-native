import {ContentRef} from '../../../../../consts/general';
import useGameStore from '../../../../pages/Menu/src/store/gameStore';
import SpendTimeTogether from './src/SpendTimeTogether/SpendTimeTogether';

const content: {[key in ContentRef]: React.JSX.Element} = {
  [ContentRef.SpendTimeTogether]: <SpendTimeTogether />,
  [ContentRef.GivePraise]: <SpendTimeTogether />,
  [ContentRef.TalkOnThePhone]: <SpendTimeTogether />,
  [ContentRef.TryToMakePeace]: <SpendTimeTogether />,
  [ContentRef.AskAboutHealth]: <SpendTimeTogether />,
  [ContentRef.AskForMoney]: <SpendTimeTogether />,
  [ContentRef.Argue]: <SpendTimeTogether />,
  [ContentRef.StealMoney]: <SpendTimeTogether />,
  [ContentRef.BecomeAcquainted]: <SpendTimeTogether />,
};

function Content() {
  const gameStore = useGameStore();

  if (!gameStore.popUpContent.contentRef) {
    return <></>;
  }

  return content[gameStore.popUpContent.contentRef];
}

export default Content;
