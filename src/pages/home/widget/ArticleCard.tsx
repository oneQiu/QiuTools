import React, { Fragment } from 'react';
import { Button, Radio, Tag } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { useNavigate } from 'react-router-dom';

interface DataItem {
  title: string;
  id: number | string;
  tags: string[];
}

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const dataSource: DataItem[] = [
  {
    title: '语雀的天空',
    id: 1,
    tags: ['测试']
  },
  {
    title: 'Ant Design',
    id: 2,
    tags: ['测试', 'Antd']
  }
];

export default () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <ProList<DataItem>
        toolBarRender={() => {
          return [
            <Button key='3' type='primary'>
              创建
            </Button>
          ];
        }}
        itemLayout='vertical'
        rowKey='id'
        headerTitle={
          <Radio.Group buttonStyle='solid' defaultValue='all'>
            <Radio.Button value='all'>所有</Radio.Button>
            <Radio.Button value='jsvascript'>JavaScript</Radio.Button>
            <Radio.Button value='react'>React</Radio.Button>
            <Radio.Button value='other'>其他</Radio.Button>
          </Radio.Group>
        }
        footer={
          <div style={{ float: 'right' }}>
            <Button type='link'>查看更多</Button>
          </div>
        }
        onRow={(record) => ({
          onClick: () => {
            navigate(`/blog/${record.id}`);
          }
        })}
        dataSource={dataSource}
        metas={{
          title: {},
          description: {
            dataIndex: 'tags',
            render: (tags: string[]) => (
              <Fragment>
                {tags.map(tag => <Tag color={'blue'} key={tag}>{tag}</Tag>)}
              </Fragment>
            )
          },
          actions: {
            render: () => [
              <IconText icon={StarOutlined} text='156' key='list-vertical-star-o' />,
              <IconText icon={LikeOutlined} text='156' key='list-vertical-like-o' />,
              <IconText icon={MessageOutlined} text='2' key='list-vertical-message' />
            ]
          },
          extra: {
            render: () => (
              <img width={272} alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' />
            )
          },
          content: {
            render: () => {
              return (
                <div>
                  段落示意：蚂蚁金服设计平台
                  design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                  design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
                </div>
              );
            }
          }
        } as any}
      />
    </Fragment>
  );
};
