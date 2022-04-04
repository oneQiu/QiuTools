import SettingBar from './widgets/SettingBar';
import Container from './widgets/Container';
import Sidebar from './widgets/Sidebar';
import styles from './index.module.less';
import {
  DragDropContext,
  DropResult,
  ResponderProvided
} from 'react-beautiful-dnd';
import { CONTAINER } from '@/constant/lowCode';
import { RootActions, useAppDispatch } from '@/store';
import { CompTag } from 'LowCode';

export default () => {
  const dispatch = useAppDispatch();
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const {
      destination,
      source: { droppableId, index }
    } = result;
    if (destination?.droppableId === CONTAINER) {
      // 移动
      if (droppableId === CONTAINER) {
        dispatch(
          RootActions.lowCode.moveComp({
            sourceIndex: index,
            destinationIndex: destination.index,
            moveId: destination.droppableId
          })
        );
      } else {
        // 新增
        dispatch(
          RootActions.lowCode.addComp(result.source.droppableId as CompTag)
        );
      }
    }
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={() => console.log('start')}>
      <div className={styles['lowcode-warp']}>
        <Sidebar />
        <Container />
        <SettingBar />
      </div>
    </DragDropContext>
  );
};
