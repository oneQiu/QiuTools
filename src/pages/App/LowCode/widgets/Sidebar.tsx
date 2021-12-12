import styles from '../index.module.less';
import { CompCategory, CompItem } from '@/constant/sidebarComp';
import { Col, Collapse, Empty, Row } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Fragment } from 'react';

const { Panel } = Collapse;
const Iconfont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_3006105_sm01rqjdoml.js',
});

export default () => {
	const renderComps = (comps: CompItem[]) => {
		return (
			<Row>
				{comps.map((i, index) => (
					<Col span={8} key={i.compName}>
						<Droppable droppableId={i.compName}>
							{(provided) => (
								<div ref={provided.innerRef} {...provided.droppableProps}>
									<Draggable
										draggableId={i.compName}
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
												<span>{i.label}</span>
											</div>
										)}
									</Draggable>
									{provided.placeholder}
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
					<Panel key={i.type} header={i.label}>
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
