import LowCode from '@/pages/App/LowCode';
import ReactDnd from '@/pages/App/ReactDnd';
import TinyMce from '@/pages/App/TinyMce';
import { IRouterConfig } from 'ice';

const routeConfig: IRouterConfig = {
  path: '/app',
  children: [
    {
      path: '/lowcode',
      component: LowCode,
    },
    {
      path: '/react-dnd',
      component: ReactDnd,
    },
    {
      path: '/tinymce',
      component: TinyMce,
    },
  ],
};
export default routeConfig;
