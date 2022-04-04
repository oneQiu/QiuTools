import { Layout } from 'antd';
import { Outlet } from 'react-router';
import styles from './index.module.less';
import Header from './widget/Header';

const { Content } = Layout;
export default () => {
  return (
    <Layout className={styles['layout-warp']}>
      <Header />
      <Content className={styles['layout-content']}>
        <Outlet />
      </Content>
    </Layout>
  );
};
