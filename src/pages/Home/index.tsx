import AppCard from './widget/AppCard';
import StatisticCard from './widget/StatisticCard';
import styles from './index.module.less';
import InfoCard from './widget/InfoCard';
import ArticleCard from './widget/ArticleCard';
import TotalCard from './widget/TotalCard';

export default () => {
	return (
		<div className={styles['home-warp']}>
			<div style={{ flex: 1 }}>
				<StatisticCard />
				<TotalCard />
				<AppCard />
				<ArticleCard />
			</div>
			<InfoCard />
		</div>
	);
};
