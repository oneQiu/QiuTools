import { PageHeader, Layout, Badge, Avatar, Progress, Menu, Dropdown } from 'antd';
import styles from '../index.module.less';
import { MailOutlined, Loading3QuartersOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import store from '@/store';
import { Logo } from '@/components/Icon';

const { Header } = Layout;

export default () => {
  const [{ loading }, dispatch] = store.useModel('layout');
  const menu = <Menu items={[{ label: <a href="#">查看资料</a> }, { label: <a href="#">退出账号</a> }]} />;

  return (
    <Fragment>
      <Progress
        className={styles['progress']}
        percent={0}
        trailColor="white"
        showInfo={false}
        size="small"
        status="active"
        strokeWidth={2}
      />
      <Header className={styles['layout-header']}>
        <PageHeader
          title={<Logo />}
          extra={
            <div className={styles['right-warp']}>
              <a
                href="#"
                className={styles['message-warp']}
                onClick={() => {
                  dispatch.setLoading();
                }}
              >
                <Badge dot>
                  <MailOutlined style={{ fontSize: 18 }} />
                </Badge>
              </a>
              <Dropdown overlay={menu} arrow>
                <Avatar size={40}>Admin</Avatar>
              </Dropdown>
            </div>
          }
        />
      </Header>
      <Loading3QuartersOutlined
        style={{
          zIndex: loading ? 5 : -1,
          position: 'fixed',
          right: 25,
          top: 27,
          color: 'green',
          fontSize: 24,
        }}
        spin
      />
    </Fragment>
  );
};
