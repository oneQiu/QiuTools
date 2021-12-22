import ReactMarkdown from 'react-markdown';
import md from './demo.md?raw';
import styles from './index.module.less';

export default () => {
	console.log(md);
	return (
		<div className={styles['blog-warp']}>
			<div className={styles['container']}>
				<ReactMarkdown children={md} />
			</div>
			<div className={styles['sidebar']}>
				<div>作者</div>
				<div>文章标签</div>
				<div className={styles['directory-column']}>目录</div>
			</div>
		</div>
	);
};
