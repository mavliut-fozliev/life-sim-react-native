import {PageNames} from '../consts/pages';
import useGlobalStore from '../storage/store';
import {Navigation} from '../types/navigation';

export function useNavigate(navigation: Navigation) {
  const {$currentPage} = useGlobalStore();

  const stepBack = () => {
    navigation.goBack();
    const routes = navigation.getState().routes;
    const page = routes[routes.length - 1].name;
    $currentPage.set(page);
  };

  const stepForward = (page: PageNames) => {
    navigation.navigate(page);
    $currentPage.set(page);
  };

  return {stepBack, stepForward};
}
