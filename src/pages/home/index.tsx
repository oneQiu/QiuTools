import AppCard from './widget/AppCard';
import StatisticCard from './widget/StatisticCard';
import styles from './index.module.less';
import ArticleCard from './widget/ArticleCard';
import TotalCard from './widget/TotalCard';
import { Space } from 'antd';
import Footer from '@/pages/home/widget/Footer';

export default () => {
  return (
    <div className={styles['home-warp']}>
      <Space direction={'vertical'} size={'middle'}>
        <StatisticCard />
        <TotalCard />
        <AppCard />
        <ArticleCard />
      </Space>
      <Footer />
    </div>
  );
};
