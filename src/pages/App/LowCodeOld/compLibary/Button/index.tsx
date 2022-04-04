import { Button } from 'antd';
import { BasicCompProps, CompSetting } from 'LowCode';

interface ButtonProps extends BasicCompProps {
	htmlType?: 'submit' | 'reset' | 'button';
}

export const ButtonSetting: CompSetting<ButtonProps> = {
	htmlType: {
		label: 'test',
		value: {},
	},
};

export const ButtonDefault: ButtonProps = {
	htmlType: 'button',
};

export default ({}: ButtonProps) => {
	return <Button>Button</Button>;
};
