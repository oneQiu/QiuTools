import { Anchor, Divider } from 'antd';
import { useEffect, useState } from 'react';

const { Link } = Anchor;

interface AnchorType {
  /** 原始数据 */
  mdStr: string;
  /** 锚点地址 */
  href: string;
  title: string;
  /** 第几层 */
  heading: number;
}
interface DirectoryColumnProps {
  md: string;
}
export default ({ md }: DirectoryColumnProps) => {
  const [anchorSet, setAnchorSet] = useState<AnchorType[]>([]);

  useEffect(() => {
    // 是否重复命名
    const headText: { [key: string]: number } = {};
    const headSet: AnchorType[] = [];
    md.split('\n').forEach((mdStr) => {
      if (/^#{1,6}\s+\S+/.test(mdStr.trim())) {
        const title = mdStr.replace(/^#+/g, '').trim();
        const heading = mdStr.trim().split(' ')[0].length;
        // 已经存在这个锚点
        if (headText[title]) {
          headSet.push({
            mdStr,
            href: `#${title}-${headText[title]}`.toLowerCase(),
            title,
            heading,
          });
          headText[title]++;
        } else {
          headSet.push({
            mdStr,
            href: `#${title.toLowerCase()}`,
            title,
            heading,
          });
          headText[title] = 1;
        }
      }
    });
    setAnchorSet(headSet);
  }, []);

  return (
    <div className="directory-column">
      <h3>目录</h3>
      <Divider />
      <Anchor className="anchor-warp">
        <Link href="#API" title="API">
          {anchorSet.map(({ heading, ...props }) => (
            <Link {...props} key={props.href} className={`menu-h${heading}`} />
          ))}
        </Link>
      </Anchor>
    </div>
  );
};
