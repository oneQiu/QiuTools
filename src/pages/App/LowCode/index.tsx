import SettingBar from './widgets/SettingBar';
import Container from './widgets/Container';
import Sidebar from './widgets/Sidebar';
import styles from './index.module.less';
import {
	DragDropContext,
	DropResult,
	ResponderProvided,
} from 'react-beautiful-dnd';

export default () => {
	const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
		console.log('end', result, provided);
	};

	return (
		<DragDropContext
			onDragEnd={onDragEnd}
			onDragStart={() => console.log('start')}
		>
			<div className={styles['lowcode-warp']}>
				<Sidebar />
				<Container />
				<SettingBar />
			</div>
		</DragDropContext>
	);
};
