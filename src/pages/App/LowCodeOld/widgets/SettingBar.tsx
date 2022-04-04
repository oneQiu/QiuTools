import { Empty } from 'antd';
import styles from '../index.module.less';

export default () => {
	return (
		<div className={styles['settingbar-warp']}>
			<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
		</div>
	);
};
