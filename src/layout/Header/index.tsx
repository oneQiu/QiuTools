import { Layout, Badge, Avatar, Dropdown } from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import styles from '../index.module.less';
import { MailOutlined } from '@ant-design/icons';
import { Logo } from '@/components/Icon';

const { Header } = Layout;

export default () => {

  return (
    <div className={styles['layout-header-placeholder']}>
      <Header className={styles['layout-header']}>
        <PageHeader
          title={<Logo />}
          extra={
            <div className={styles['right-warp']}>
              <a
                href='/'
                className={styles['message-warp']}
                onClick={() => {
                }}
              >
                <Badge dot>
                  <MailOutlined style={{ fontSize: 18 }} />
                </Badge>
              </a>
              <Dropdown
                menu={{
                  items: [{ label: '查看资料', key: 'info' }, {
                    label: '系统设置',
                    key: 'setting'
                  }, { label: '退出账号', key: 'logout' }]
                }}
                arrow>
                <Avatar size={40}>UserName</Avatar>
              </Dropdown>
            </div>
          }
        />
      </Header>
    </div>
  );
};
