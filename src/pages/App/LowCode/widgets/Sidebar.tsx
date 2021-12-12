import styles from '../index.module.less';
import { CompCategory, SidebarItem } from '@/constant/lowCode';
import { Col, Collapse, Empty, Row } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const { Panel } = Collapse;
const Iconfont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_3006105_sm01rqjdoml.js',
});

export default () => {
	const renderComps = (comps: SidebarItem[]) => {
		return (
			<Row>
				{comps.map((i, index) => (
					<Col span={8} key={i.compTag}>
						<Droppable droppableId={i.compTag} isDropDisabled>
							{(provided, snapshot) => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<Draggable
										draggableId={i.compTag}
										shouldRespectForcePress
										index={index}
									>
										{(provided, snapshot) => (
											<div
												className={styles['item-warp']}
												ref={provided.innerRef}
												style={{ opacity: snapshot.isDragging ? 0.5 : 1 }}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<Iconfont
													type={i.icon || 'icon-zujian'}
													style={{ fontSize: 28 }}
												/>
												<span>{i.name}</span>
											</div>
										)}
									</Draggable>
									{snapshot.isUsingPlaceholder && provided.placeholder}
								</div>
							)}
						</Droppable>
					</Col>
				))}
			</Row>
		);
	};

	return (
		<div className={styles['sidebar-warp']}>
			<Collapse
				defaultActiveKey={CompCategory.map((i) => i.type)}
				ghost
				expandIconPosition="right"
			>
				{CompCategory.map((i) => (
					<Panel key={i.type} header={i.name}>
						{i.components.length === 0 ? (
							<Empty
								image={Empty.PRESENTED_IMAGE_SIMPLE}
								description="暂无相关组件"
							/>
						) : (
							renderComps(i.components)
						)}
					</Panel>
				))}
			</Collapse>
		</div>
	);
};
