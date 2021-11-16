import AppCard from './widget/AppCard';
import StatisticCard from './widget/StatisticCard';
import styles from './index.module.less';
import InfoCard from './widget/InfoCard';

export default () => {
	return (
		<div className={styles['home-warp']}>
			<div style={{ flex: 1 }}>
				<StatisticCard />
				<AppCard title="案例" type="demo" />
				<AppCard title="文章" type="article" />
			</div>
			<InfoCard />
		</div>
	);
};
