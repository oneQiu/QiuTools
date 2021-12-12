import { CONTAINER } from '@/constant/lowCode';
import { useAppSelector } from '@/store';
import { Button } from 'antd';
import { CompItem } from 'LowCode';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DeleteTwoTone } from '@ant-design/icons';
import styles from '../index.module.less';

export default () => {
	const { build } = useAppSelector((store) => store.lowCode);

	const renderItem = (i: CompItem, idx: number) => (
		<Draggable key={i.id} index={idx} draggableId={i.id}>
			{(provided) => (
				<div
					className={styles.item}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
				>
					{`${i.compTag}: ${i.id}`}
					<span className={styles['tagname']}>{i.name}</span>
					<Button
						icon={<DeleteTwoTone />}
						className={styles['delete-button']}
						type="link"
					/>
				</div>
			)}
		</Draggable>
	);

	return (
		<Droppable droppableId={CONTAINER}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className={styles['container-warp']}
				>
					{build.map(renderItem)}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};
