import { CompName, CompType } from 'LowCode';

export interface CompItem {
	label: string;
	icon?: string;
	/** 组件标签名 */
	compName: CompName;
	type: CompType;
}

interface CategoryItem extends Omit<CompItem, 'compName'> {
	components: CompItem[];
}

export const CompSet: CompItem[] = [
	{
		label: '输入框',
		compName: 'Input',
		type: 'FormField',
		icon: 'icon-biaodanzujian-shurukuang',
	},
	{
		label: '按钮',
		type: 'Basic',
		compName: 'Button',
		icon: 'icon-icon-anniu',
	},
];

export const CompCategory: CategoryItem[] = [
	{
		label: '基础',
		type: 'Basic',
		components: CompSet.filter((i) => i.type === 'Basic'),
	},
	{
		label: '布局',
		type: 'Layout',
		components: CompSet.filter((i) => i.type === 'Layout'),
	},
	{
		label: '表单',
		type: 'FormField',
		components: CompSet.filter((i) => i.type === 'FormField'),
	},
];
