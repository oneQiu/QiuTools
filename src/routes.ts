import Home from '@/pages/Home';
import Layout from '@/layouts';
// 其他路由配置
import appRoutes from '@/routers/app';
import Blog from '@/pages/Blog';
import { IRouterConfig } from 'ice';

export interface RouterConfig extends IRouterConfig {
  pageConfig?: {
    /** 配置页面标题 */
    title?: string;
    /** 默认 false，进入页面时是否要滚动到顶部 */
    scrollToTop?: boolean;
    /** 配置页面准入权限角色列表 */
    auth?: string[];
    /** 默认 false，是否为页面组件包裹 ErrorBoundary */
    errorBoundary?: boolean;
    /** 由 plugin-keep-alive 插件扩展，默认 true */
    keepAlive?: boolean;
    /** 显示Layout */
    layout?: boolean;
  };
  children?: RouterConfig[];
}

const routeConfig: RouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      appRoutes,
      {
        path: '/blog/:id',
        component: Blog,
        pageConfig: {
          scrollToTop: true,
        },
      },
      {
        path: '',
        component: Home,
      },
    ],
  },
];

export default routeConfig;
