import { Col, Row, Card } from 'antd';
import { Fragment, useState } from 'react';
import styles from '../index.module.less';
import {
	LikeOutlined,
	EditOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
import { Popover, Divider, Button } from 'antd';

interface AppCardProps {
	title: string;
	type: 'article' | 'demo';
}
const { Meta } = Card;

export default ({ title, type }: AppCardProps) => {
	const [appList, setAppList] = useState([1, 2, 3, 4]);

	return (
		<div className={styles['app-card-warp']}>
			<div style={{ marginBottom: 20 }}>{title}</div>
			<Row gutter={[32, 16]}>
				{appList.map((i) => (
					<Col key={i} span={6}>
						<Card
							cover={
								<img
									alt="example"
									src="https://joeschmoe.io/api/v1/random"
									height={100}
								/>
							}
							actions={[
								<LikeOutlined key="LikeOutlined" />,
								<EditOutlined key="edit" />,
								<Popover
									content={
										<Fragment>
											<Button type="text">分享链接</Button>
											<Divider style={{ margin: '12px 0' }} />
											<Button type="text">删除</Button>
										</Fragment>
									}
								>
									<EllipsisOutlined key="ellipsis" />
								</Popover>,
							]}
						>
							<Meta title="Card title" description="This is the description" />
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};
