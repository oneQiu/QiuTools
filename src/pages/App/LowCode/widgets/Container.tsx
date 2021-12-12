import { Droppable } from 'react-beautiful-dnd';
import styles from '../index.module.less';

export default () => {
	return (
		<Droppable droppableId="container">
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles['container-warp']}
				>
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};
