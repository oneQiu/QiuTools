import { Row, Col, Button } from 'antd';
import { Fragment, useLayoutEffect, useRef } from 'react';
import hljs from 'highlight.js';
import E from 'wangeditor';
import 'highlight.js/styles/atom-one-dark.css';

export default () => {
	const SourceRef = useRef<HTMLDivElement>(null);
	const TargetRef = useRef<HTMLDivElement>(null);
	let sourceEditor: E, targetEditor: E;

	useLayoutEffect(() => {
		sourceEditor = new E(SourceRef.current);
		targetEditor = new E(TargetRef.current);
		sourceEditor.highlight = hljs;
		targetEditor.highlight = hljs;
		sourceEditor.config.languageType = ['TypeScript', 'JavaScript'];
		sourceEditor.create();
		targetEditor.create();
	}, []);

	const onTransform = () => {
		const text = sourceEditor.txt.text();
		let resArr: string[] = [];
		resArr = text.split('\n');
		targetEditor.txt.text(JSON.stringify(resArr));
	};

	return (
		<Fragment>
			<Row align="middle">
				<Col span={11}>
					<div ref={SourceRef}></div>
				</Col>
				<Col span={2} style={{ textAlign: 'center' }}>
					<Button onClick={onTransform}>转换</Button>
				</Col>
				<Col span={11}>
					<div ref={TargetRef}></div>
				</Col>
			</Row>
		</Fragment>
	);
};
