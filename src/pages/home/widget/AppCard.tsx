import { Progress, Tag } from 'antd';
import { ProList } from '@ant-design/pro-components';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppDataItem {
  title: string;
  appId: string;
  type: 'React' | 'Vue' | 'JavaScript';
  href?: string;
}

export default () => {
  const navigate = useNavigate();

  const appData: AppDataItem[] = [
    {
      title: '可视化搭建平台',
      appId: 'lowCode',
      type: 'React'
    },
    { title: '富文本编辑器', appId: 'tinymce', type: 'React' },
    {
      title: 'Qooi组件库',
      appId: 'qooi',
      type: 'React',
      href: 'https://oneqiu.cn/qooi'
    }
  ];
  const data = appData.map(({ title, appId, type, href }) => ({
    title,
    subTitle: <Tag color='#5BD8A6'>{type} 专栏</Tag>,
    actions: [
      <a
        key='run'
        onClick={() => {
          if (href != null) {
            window.open(href);
          } else {
            navigate(`/app/${appId}`);
          }
        }}
      >
        查看
      </a>,
      <a key='share'>分享</a>
    ],
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
    content: (
      <div
        style={{
          flex: 1
        }}
      >
        <div
          style={{
            width: 200
          }}
        >
          <div>开发中</div>
          <Progress percent={80} />
        </div>
      </div>
    )
  }));
  return (
    <Fragment>
      <ProList<any>
        grid={{ gutter: 16, column: 2 }}
        metas={{
          title: {},
          subTitle: {},
          type: {},
          avatar: {},
          content: {},
          actions: {}
        } as any}
        headerTitle={<span style={{ fontWeight: 'bold' }}></span>}
        dataSource={data}
      />
    </Fragment>
  );
};
