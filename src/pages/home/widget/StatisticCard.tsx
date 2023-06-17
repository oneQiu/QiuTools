import { Row, Col, Card, Calendar } from 'antd';
import ReactECharts from 'echarts-for-react';
import styles from '../index.module.less';
import { StatisticCard } from '@ant-design/pro-card';
import { option, StatisticList } from './schema';
import Icon from '@/components/Icon';

export default () => {
  return (
    <Card className={styles['statistic-card-warp']}>
      <Row justify="space-between">
        <Col span={6}>
          <ReactECharts option={option} />
        </Col>
        <Col span={16}>
          <StatisticCard.Group direction="row">
            {StatisticList.map(({ title, value, icon }) => (
              <StatisticCard
                key={icon}
                statistic={{
                  title,
                  value,
                  icon: <Icon type={icon} style={{ fontSize: 36 }} />,
                }}
              />
            ))}
          </StatisticCard.Group>
          <Calendar onPanelChange={() => {}} fullscreen={false} />
        </Col>
      </Row>
    </Card>
  );
};
