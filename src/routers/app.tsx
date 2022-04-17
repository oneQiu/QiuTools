import LowCode from '@/pages/App/LowCode';
import ReactDnd from '@/pages/App/ReactDnd';
import TinyMce from '@/pages/App/TinyMce';
import Design from '@/pages/App/LowCode/Design';
import { RouterConfig } from '@/routes';
import Preview from '@/pages/App/LowCode/Preview';

const routerConfig: RouterConfig = {
  path: '/app',
  children: [
    {
      path: '/Lowcode',
      children: [
        {
          path: '/',
          component: LowCode,
          exact: true,
        },
        {
          path: '/design/:pageId?',
          component: Design,
          pageConfig: {
            layout: false,
          },
        },
        {
          path: '/preview/:pageId',
          component: Preview,
          pageConfig: {
            layout: false,
          },
        },
      ],
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
export default routerConfig;
