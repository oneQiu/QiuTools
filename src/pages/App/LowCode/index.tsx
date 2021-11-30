import SettingBar from './widgets/SettingBar';
import Container from './widgets/Container';
import Sidebar from './widgets/Sidebar';
import styles from './index.module.less';

export default () => {
	return (
		<div className={styles['lowcode-warp']}>
			<Sidebar />
			<Container />
			<SettingBar />
		</div>
	);
};
