import Home from '../pages/home';
import Favorite from '../pages/favorite';
import Detail from '../pages/detail';
import Restaurant from '../pages/restaurant';

const routes = {
  '/': Home, // default page
  '/restaurant': Restaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
