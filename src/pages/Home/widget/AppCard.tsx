import { Progress, Tag } from 'antd';
import ProList from '@ant-design/pro-list';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
	const navigate = useNavigate();
	const data = ['可视化搭建平台'].map((item) => ({
		title: item,
		subTitle: <Tag color="#5BD8A6">React 专栏</Tag>,
		actions: [
			<a
				key="run"
				onClick={() => {
					navigate('/app/lowCode');
				}}
			>
				查看
			</a>,
			<a key="share">分享</a>,
		],
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
					<div>开发中</div>
					<Progress percent={80} />
				</div>
			</div>
		),
	}));
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
