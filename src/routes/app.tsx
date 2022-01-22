import LowCode from '@/pages/App/LowCode';
import ReactDnd from '@/pages/App/ReactDnd';
import CodeToJson from '@/pages/App/CodeToJson';
import TinyMce from '@/pages/App/TinyMce';

const routeConfig: RouteProps = {
  path: '/app',
  children: [
    {
      path: '/app/lowcode',
      component: <LowCode />
    },
    {
      path: '/app/react-dnd',
      component: <ReactDnd />
    },
    {
      path: '/app/codeToJson',
      component: <CodeToJson />
    },
    {
      path: '/app/tinymce',
      component: <TinyMce />
    }
  ]
};
export default routeConfig;
