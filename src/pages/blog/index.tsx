import ReactMarkdown from 'react-markdown';
import md from './demo.md?raw';
import { Prism as SyntaxHignlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import './index.less';
import Author from './widget/Author';
import Tags from './widget/Tags';
import DirectoryColumn from './widget/DirectoryColumn';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { Divider } from 'antd';
import CommentArea from './widget/CommentArea';

export default () => {
	return (
		<div className="blog-warp">
			<div className="container-warp">
				<div className="container">
					<h1 className="title">标题</h1>
					<div style={{ margin: '40px 0' }}>用户信息</div>
					<Divider />
					<ReactMarkdown
						children={md}
						plugins={[remarkGfm]}
						rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
						skipHtml
						components={{
							code: ({ inline, node, className, children, ...props }) => {
								const match = /language-(\w+)/.exec(className || '');
								return !inline && match ? (
									<SyntaxHignlighter
										children={String(children).replace(/\n$/, '')}
										language={match[1]}
										style={atomDark}
										{...(props as any)}
									/>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
						}}
					/>
				</div>
				<CommentArea />
			</div>

			<div className="sidebar">
				<Author />
				<Tags />
				<DirectoryColumn md={md} />
			</div>
		</div>
	);
};
