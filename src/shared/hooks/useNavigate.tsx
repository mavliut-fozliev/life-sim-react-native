import {PageNames} from '../constants/pages';
import useGameStore from '../store/gameStore';
import {Navigation} from '../types/navigation';

export function useNavigate(navigation: Navigation) {
  const {$currentPage} = useGameStore();

  const stepBack = () => {
    navigation.goBack();
    const routes = navigation.getState().routes;
    const page = routes[routes.length - 1].name;
    $currentPage.set(page);
  };

  const backTo = (page: PageNames) => {
    navigation.popTo(page);
    $currentPage.set(page);
  };

  const backToHome = () => {
    navigation.popTo(PageNames.Home);
    $currentPage.set(PageNames.Home);
  };

  const stepForward = (page: PageNames, props?: object) => {
    navigation.navigate(page, props);
    $currentPage.set(page);
  };

  return {stepBack, backTo, backToHome, stepForward};
}
