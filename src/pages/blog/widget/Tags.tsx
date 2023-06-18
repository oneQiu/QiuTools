import { notification, Tag } from 'antd';
import {
	TwitterOutlined,
	FacebookOutlined,
	WechatOutlined,
} from '@ant-design/icons';
import { ReactNode } from 'react';

interface TagInfo {
	color?: string;
	icon?: ReactNode;
	container: ReactNode;
	key: string;
}
export default () => {
	const tags: TagInfo[] = [
		{
			key: '1',
			container: 'Twitter',
			icon: <TwitterOutlined />,
			color: '#55acee',
		},
		{
			key: '2',
			container: 'Twitter',
			icon: <FacebookOutlined />,
			color: '#3b5999',
		},
		{
			key: '3',
			container: 'Twitter',
			icon: <WechatOutlined />,
			color: '#27DB6F',
		},
	];

	const onTagClick = (key: string) => {
		notification.warn({
			message: '提示',
			description: `Go: ${key}`,
		});
	};

	return (
		<div className="tags-warp">
			{tags.map((i) => (
				<Tag
					{...i}
					style={{ cursor: 'pointer' }}
					onClick={() => onTagClick(i.key)}
				>
					{i.container}
				</Tag>
			))}
		</div>
	);
};
