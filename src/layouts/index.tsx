import { Layout } from 'antd';
import styles from './index.module.less';
import Header from './widget/Header';

const { Content } = Layout;
export default ({ children }) => {
  return (
    <Layout className={styles['layout-warp']}>
      <Header />
      <Content className={styles['layout-content']}>{children}</Content>
    </Layout>
  );
};
