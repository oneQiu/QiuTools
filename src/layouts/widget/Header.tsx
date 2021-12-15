import {
	PageHeader,
	Layout,
	Button,
	Badge,
	Avatar,
	Progress,
	Popover,
	Divider,
} from 'antd';
import styles from '../index.module.less';
import { MailOutlined, Loading3QuartersOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { systemActions } from '@/store/features/system';

const { Header } = Layout;

export default () => {
	const systemStore = useAppSelector((state) => state.system);
	const dispatch = useAppDispatch();

	return (
		<Fragment>
			<Progress
				className={styles['progress']}
				percent={0}
				trailColor="white"
				showInfo={false}
				size="small"
				status="active"
				strokeWidth={2}
			/>
			<Header className={styles['layout-header']}>
				<PageHeader
					title="Qite"
					subTitle="This is Qite"
					extra={
						<div className={styles['right-warp']}>
							<a
								href="#"
								className={styles['message-warp']}
								onClick={() => {
									dispatch(systemActions.setLoading());
								}}
							>
								<Badge dot>
									<MailOutlined style={{ fontSize: 18 }} />
								</Badge>
							</a>
							<Popover
								content={
									<Fragment>
										<Button type="text">查看资料</Button>
										<Divider style={{ margin: '12px 0' }} />
										<Button type="text">退出账号</Button>
									</Fragment>
								}
							>
								<Avatar size={40}>Admin</Avatar>
							</Popover>
						</div>
					}
				/>
			</Header>
			<Loading3QuartersOutlined
				style={{
					zIndex: systemStore.loading ? 5 : -1,
					position: 'fixed',
					right: 25,
					top: 27,
					color: 'green',
					fontSize: 24,
				}}
				spin
			/>
		</Fragment>
	);
};