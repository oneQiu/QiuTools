import ReactMarkdown from 'react-markdown';
import md from './demo.md?raw';
import './index.less';

export default () => {
	console.log(md);
	return (
		<div className="blog-warp">
			<div className="container-warp">
				<div className="container">
					<h1 className="title">标题</h1>
					<div style={{ margin: '40px 0' }}>用户信息</div>
					<ReactMarkdown children={md} />
				</div>
				<div className="comment-area">评论区</div>
			</div>

			<div className="sidebar">
				<div>作者</div>
				<div>文章标签</div>
				<div className="directory-column">目录</div>
			</div>
		</div>
	);
};
