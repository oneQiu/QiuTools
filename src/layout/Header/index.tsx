import { Layout, Badge, Avatar, Dropdown } from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import styles from '../index.module.less';
import { MailOutlined } from '@ant-design/icons';
import { Logo } from '@/components/Icon';
import AuthModal from '@/components/AuthModal';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/stores';
import userSlice, { fetchUserInfo } from '@/stores/user';
import { TOKEN_KEY } from '@/constants/storageKey';
import { getSearchParams } from '@/utils/toolkit';

const { Header } = Layout;

export default () => {
  const { username, avatarUrl } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { code } = getSearchParams();
    if (code) {
      console.log('code');
    } else {
      dispatch(fetchUserInfo(10014));
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    dispatch(userSlice.actions.clearUserInfo());
  };

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
                    { label: '退出账号', key: 'logout', onClick: logOut },
                  ],
                }}
                arrow
              >
                <Avatar
                  size={40}
                  src={avatarUrl}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (!username) {
                      AuthModal.open();
                    }
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
