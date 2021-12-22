import { CompItem } from 'LowCode';
import { Fragment } from 'react';
import CompLibary from '../compLibary';

interface ItemRenderProps extends CompItem {}
export default ({ compTag }: ItemRenderProps) => {
	const Tag = CompLibary[compTag] || Fragment;
	return <Tag>123</Tag>;
};
