import { Row, Col, Button } from 'antd';
import { Fragment, RefObject, useLayoutEffect, useRef } from 'react';
import '@wangeditor/editor/dist/css/style.css';
import Editor, { EditorRef } from './widgets/Editor';

export default () => {
	const editorRef = useRef<EditorRef>();
	useLayoutEffect(() => {}, []);

	const onTransform = () => {
		console.log(editorRef.current?.getValue());
	};

	return (
		<Fragment>
			<Row align="middle">
				<Col span={11}>
					<Editor />
				</Col>
				<Col span={2} style={{ textAlign: 'center' }}>
					<Button onClick={onTransform}>转换</Button>
				</Col>
				<Col span={11}>
					<Editor ref={editorRef as any} />
				</Col>
			</Row>
		</Fragment>
	);
};
