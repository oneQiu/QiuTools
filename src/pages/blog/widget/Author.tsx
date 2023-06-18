import { HeartTwoTone, LikeTwoTone } from '@ant-design/icons';
import { Avatar, Button, Divider } from 'antd';

export default () => {
	return (
		<div className="author-warp">
			<div className="author-info">
				<div>
					<Avatar
						size="large"
						style={{
							color: '#f56a00',
							backgroundColor: '#fde3cf',
							marginRight: 20,
						}}
					>
						Q
					</Avatar>
				</div>
				<div>
					<div className="username">QiuQiu</div>
					<div>this is my bolg</div>
				</div>
			</div>
			<Divider />
			<div className="achievement">
				<Button
					icon={
						<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: 18 }} />
					}
					type="text"
				/>
				有 232 个人觉得TA很优秀
			</div>
			<div className="achievement">
				{/* #52c41a */}
				<Button
					icon={<LikeTwoTone twoToneColor="grey+" style={{ fontSize: 18 }} />}
					type="text"
				/>
				TA被夸过 3115 次了
			</div>
		</div>
	);
};
