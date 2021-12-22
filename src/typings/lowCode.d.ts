declare module 'LowCode' {
	type CompTag = 'Input' | 'Button';
	type CompType = 'Layout' | 'Basic' | 'FormField';
	interface OptionItem {
		label: string;
		value: string | number | boolean;
	}
	// 拖拽中间的项
	interface CompItem {
		id: string;
		compTag: CompTag;
		name: string;
		props: any;
	}

	interface BasicCompProps {}
	// 默认Props
	interface AnyCompProps extends BasicCompProps {
		[key: string]: any;
	}

	// 组件设置
	type CompSetting<T = AnyCompProps> = {
		[key in keyof T]: {
			label: string;
			value: Omit<T, key>;
		};
	};
}
