declare module 'LowCode' {
	type CompTag = 'Input' | 'Button';
	type CompType = 'Layout' | 'Basic' | 'FormField';
	// 拖拽中间的项
	interface CompItem {
		id: string;
		compTag: CompTag;
		name: string;
		props: any;
	}
}
