import { Progress, Tag } from 'antd';
import ProList from '@ant-design/pro-list';
import { Fragment } from 'react';

const data = [
	'语雀的天空',
	'Ant Design',
	'蚂蚁金服体验科技',
	'TechUI',
	'TechUI 2.0',
	'Bigfish',
].map((item) => ({
	title: item,
	subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
	actions: [<a key="run">查看</a>, <a key="delete">删除</a>],
	avatar:
		'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
	content: (
		<div
			style={{
				flex: 1,
			}}
		>
			<div
				style={{
					width: 200,
				}}
			>
				<div>发布中</div>
				<Progress percent={80} />
			</div>
		</div>
	),
}));

export default () => {
	return (
		<Fragment>
			<h2 style={{ margin: 20 }}>Demo</h2>
			<ProList<any>
				grid={{ gutter: 16, column: 2 }}
				metas={{
					title: {},
					subTitle: {},
					type: {},
					avatar: {},
					content: {},
					actions: {},
				}}
				headerTitle="前端案例展示"
				dataSource={data}
			/>
		</Fragment>
	);
};
