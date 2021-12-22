import React, { Fragment } from 'react';
import { Button, Tag } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ProList from '@ant-design/pro-list';
import useHistory from '@/hooks/useHistory';

interface DataItem {
	title: string;
	id: number | string;
}
const IconText = ({ icon, text }: { icon: any; text: string }) => (
	<span>
		{React.createElement(icon, { style: { marginRight: 8 } })}
		{text}
	</span>
);

const dataSource: DataItem[] = [
	{
		title: '语雀的天空',
		id: 1,
	},
	{
		title: 'Ant Design',
		id: 2,
	},
	{
		title: '蚂蚁金服体验科技',
		id: 3,
	},
	{
		title: 'TechUI',
		id: 4,
	},
];

export default () => {
	const history = useHistory();
	return (
		<Fragment>
			<h2 style={{ margin: 20 }}>Article</h2>
			<ProList<DataItem>
				toolBarRender={() => {
					return [
						<Button key="3" type="primary">
							新建
						</Button>,
					];
				}}
				itemLayout="vertical"
				rowKey="id"
				headerTitle="竖排样式"
				onRow={(record) => ({
					onClick: (event) => {
						history.push(`/blog/${record.id}`);
					},
				})}
				dataSource={dataSource}
				metas={{
					title: {},
					description: {
						render: () => (
							<>
								<Tag color="blue">语雀专栏</Tag>
								<Tag color="cyan">设计语言</Tag>
								<Tag color="gold">蚂蚁金服</Tag>
							</>
						),
					},
					actions: {
						render: () => [
							<IconText
								icon={StarOutlined}
								text="156"
								key="list-vertical-star-o"
							/>,
							<IconText
								icon={LikeOutlined}
								text="156"
								key="list-vertical-like-o"
							/>,
							<IconText
								icon={MessageOutlined}
								text="2"
								key="list-vertical-message"
							/>,
						],
					},
					extra: {
						render: () => (
							<img
								width={272}
								alt="logo"
								src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
							/>
						),
					},
					content: {
						render: () => {
							return (
								<div>
									段落示意：蚂蚁金服设计平台
									design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
									design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
								</div>
							);
						},
					},
				}}
			/>
		</Fragment>
	);
};
