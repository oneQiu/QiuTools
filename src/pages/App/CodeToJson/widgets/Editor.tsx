import React, {
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from 'react';
import '@wangeditor/editor/dist/css/style.css';
import {
	IDomEditor,
	IEditorConfig,
	IToolbarConfig,
	SlateDescendant,
} from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import 'prismjs/themes/prism.css';
import './index.css';

export interface EditorRef {
	/** 设置富文本值 */
	setValue: (val: any) => void;
	/** 获取富文本值 */
	getValue: () => void;
	/** Editor实例 */
	editor: IDomEditor;
}

export default forwardRef<EditorRef>((props, ref) => {
	// 存储 editor 实例
	const [editor, setEditor] = useState<IDomEditor | null>(null);
	// 存储 editor 的最新内容（json 格式）
	const [curContent, setCurContent] = useState<SlateDescendant[]>([]);
	// 工具栏配置
	const toolbarConfig: Partial<IToolbarConfig> = {};
	// editor 配置
	const editorConfig: Partial<IEditorConfig> = {
		placeholder: '请输入内容...',
		onCreated: (editor: IDomEditor) => {
			// 记录 editor 实例，重要 ！
			// 有了 editor 实例，就可以执行 editor API
			setEditor(editor);
		},
		onChange: (editor: IDomEditor) => {
			// editor 选区或者内容变化时，获取当前最新的的 content
			setCurContent(editor.children);
		},
	};

	useImperativeHandle(ref, () => ({
		setValue: setEditor,
		getValue:  editor?.getText || (() =>{}),
		editor:,
	}));

	useEffect(() => {
		return () => {
			if (editor == null) return;
			editor.destroy();
			setEditor(null);
		};
	}, [editor]);

	return (
		<React.Fragment>
			<div className="mine-editor-warp">
				<Toolbar
					editor={editor}
					defaultConfig={toolbarConfig}
					mode="default"
					style={{ borderBottom: '1px solid #ccc' }}
				/>
				<Editor
					defaultConfig={editorConfig}
					defaultContent={[]}
					mode="default"
					style={{ height: '400px' }}
				/>
			</div>
		</React.Fragment>
	);
});
