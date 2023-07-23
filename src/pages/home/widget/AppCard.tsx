import { Progress, Tag } from 'antd';
import { ProList } from '@ant-design/pro-components';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppList } from '@/services/app';

export default () => {
  const navigate = useNavigate();

  const metas = {
    title: {
      dataIndex: 'appName',
    },
    subTitle: {
      dataIndex: 'tagIds',
      render: (tagIds: any) => <Tag color="#5BD8A6">{tagIds} 专栏</Tag>,
    },
    actions: {
      dataIndex: 'appUrl',
      render: (href: string, { appId }: any) => [
        <a
          key="run"
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
        <a key="share">分享</a>,
      ],
    },
    avatar: {
      dataIndex: 'coverUrl',
    },
    content: {
      dataIndex: 'status',
      render: (status: number) => {
        return (
          <div
            style={{
              flex: 1,
            }}
          >
            <div
              style={{
                width: 200,
              }}
            >
              <div>开发中</div>
              <Progress percent={80} />
            </div>
          </div>
        );
      },
    },
  };

  return (
    <Fragment>
      <ProList
        grid={{ gutter: 16, column: 2 }}
        metas={metas as any}
        request={async () => {
          const res = await getAppList();
          console.log(res.data.list);
          return {
            data: res.data.list || [],
            success: !res.data.flag,
            total: res.data.total,
          };
        }}
        headerTitle={<span style={{ fontWeight: 'bold' }}></span>}
      />
    </Fragment>
  );
};
