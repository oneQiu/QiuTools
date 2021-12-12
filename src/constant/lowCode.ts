import { CompTag, CompType } from 'LowCode';

export interface SidebarItem {
	name: string;
	icon?: string;
	/** 组件标签名 */
	compTag: CompTag;
	type: CompType;
}

interface CategoryItem extends Omit<SidebarItem, 'compTag'> {
	components: SidebarItem[];
}

export const CompSet: SidebarItem[] = [
	{
		name: '输入框',
		compTag: 'Input',
		type: 'FormField',
		icon: 'icon-biaodanzujian-shurukuang',
	},
	{
		name: '按钮',
		type: 'Basic',
		compTag: 'Button',
		icon: 'icon-icon-anniu',
	},
];

export const CompCategory: CategoryItem[] = [
	{
		name: '基础',
		type: 'Basic',
		components: CompSet.filter((i) => i.type === 'Basic'),
	},
	{
		name: '布局',
		type: 'Layout',
		components: CompSet.filter((i) => i.type === 'Layout'),
	},
	{
		name: '表单',
		type: 'FormField',
		components: CompSet.filter((i) => i.type === 'FormField'),
	},
];

// 拖拽常量
export const CONTAINER = 'Container';
export const SIDEBAR = 'Sidebar';
