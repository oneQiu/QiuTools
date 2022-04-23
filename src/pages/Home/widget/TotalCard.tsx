import { StatisticCard } from '@ant-design/pro-card';
import { Divider } from 'antd';
import { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h2 style={{ margin: 20 }}>统计</h2>
      <StatisticCard.Group>
        <StatisticCard
          statistic={{
            title: '全部',
            tip: '所有部署在网站的应用以及文章',
            value: 10,
          }}
        />
        <Divider type="vertical" style={{ height: '100%' }} />
        <StatisticCard
          statistic={{
            title: '未发布',
            value: 5,
            status: 'default',
          }}
        />
        <StatisticCard
          statistic={{
            title: '发布中',
            value: 3,
            status: 'processing',
          }}
        />
        <StatisticCard
          statistic={{
            title: '发布成功',
            value: 2,
            status: 'success',
          }}
        />
      </StatisticCard.Group>
    </Fragment>
  );
};
