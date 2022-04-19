import { Layout } from 'antd';
import styles from './index.module.less';
import Header from './widget/Header';
import routes, { RouterConfig } from '@/routes';
import { matchPath } from 'ice';
import { useEffect } from 'react';

const { Content } = Layout;
export default ({ children }) => {
  useEffect(() => {
    document.getElementById('layout-content')?.scrollTo(0, 0);
  });

  const getRouterInfo = (routerConfig: RouterConfig[], parentPath = ''): RouterConfig | null => {
    for (let i = 0; i < routerConfig.length; i++) {
      const { path, exact, children: _children = [], pageConfig } = routerConfig[i];
      if (matchPath(location.pathname, { path: `${parentPath}${path}`, exact }) && pageConfig?.layout === false) {
        return routerConfig[i];
      } else if (_children.length > 0) {
        return getRouterInfo(_children, `${parentPath}${path}`.replaceAll('//', '/'));
      }
    }
    return null;
  };
  const routerInfo = getRouterInfo(routes);

  if (routerInfo?.pageConfig?.layout === false) return children;

  return (
    <Layout className={styles['layout-warp']}>
      <Header />
      <Content id="layout-content" className={styles['layout-content']}>
        {children}
      </Content>
    </Layout>
  );
};
