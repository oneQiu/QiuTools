import AppCard from './widget/AppCard';
import StatisticCard from './widget/StatisticCard';
import styles from './index.module.less';
import InfoCard from './widget/InfoCard';
import ArticleCard from './widget/ArticleCard';
import TotalCard from './widget/TotalCard';
import { Space } from 'antd';
import Footer from '@/pages/home/widget/Footer';

export default () => {
  return (
    <div className={styles['home-warp']}>
      <div className={styles.container}>
        <div style={{ flex: 1 }}>
          <Space direction={'vertical'} size={'middle'}>
            <StatisticCard />
            <TotalCard />
            <AppCard />
            <ArticleCard />
          </Space>
        </div>
        <InfoCard />
      </div>
      <Footer />
    </div>
  );
};
