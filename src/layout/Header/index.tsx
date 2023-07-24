import { Layout, Badge, Avatar, Dropdown } from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import styles from '../index.module.less';
import { MailOutlined } from '@ant-design/icons';
import { Logo } from '@/components/Icon';
import AuthModal from '@/components/AuthModal';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/stores';
import { fetchUserInfo } from '@/stores/user';

const { Header } = Layout;

export default () => {
  const { username, avatarUrl } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo(10014));
  }, []);

  return (
    <div className={styles['layout-header-placeholder']}>
      <Header className={styles['layout-header']}>
        <PageHeader
          title={<Logo />}
          extra={
            <div className={styles['right-warp']}>
              <a href="/" className={styles['message-warp']} onClick={() => {}}>
                <Badge dot>
                  <MailOutlined style={{ fontSize: 18 }} />
                </Badge>
              </a>
              <Dropdown
                menu={{
                  items: [
                    { label: '查看资料', key: 'info' },
                    {
                      label: '系统设置',
                      key: 'setting',
                    },
                    { label: '退出账号', key: 'logout' },
                  ],
                }}
                arrow
              >
                <Avatar
                  size={40}
                  src={avatarUrl}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    AuthModal.open();
                  }}
                >
                  {username || '未登录'}
                </Avatar>
              </Dropdown>
            </div>
          }
        />
      </Header>
    </div>
  );
};
