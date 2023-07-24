import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
import Header from '@/layout/Header';

export default () => {
  return (
    <div className={styles['layout-warp']}>
      <Header />
      <div className={styles['layout-content']}>
        <Outlet />
      </div>
    </div>
  );
};
