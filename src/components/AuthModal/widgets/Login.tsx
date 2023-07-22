import { Button, Checkbox, Form, Input, Space } from 'antd';
import { CloseOutlined, GithubOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { FC, useEffect, useState } from 'react';

interface LoginProps {
  onClose: () => void;
}

const Login: FC<LoginProps> = ({ onClose }) => {
  const [wrapClassnames, setWrapClassnames] = useState([
    styles['login-modal'],
    styles.active,
  ]);

  useEffect(() => {
    setWrapClassnames([styles['login-modal']]);
    return () => {
      setWrapClassnames([styles['login-modal'], styles.active]);
    };
  }, []);

  return (
    <div className={wrapClassnames.join(' ')}>
      <div className={styles.body}>
        <Button
          type="text"
          className={styles.close}
          icon={<CloseOutlined />}
          onClick={onClose}
        />
        <h2>oneQiu</h2>
        <div className={styles.desc}>
          Hello World <br /> Let's Go
        </div>
        <Form className={styles['flex-item']}>
          <Form.Item name="username">
            <Input placeholder="用户名" size="large" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="密码" size="large" />
          </Form.Item>
        </Form>
        <div className={`${styles['flex-item']} ${styles['help-bar']}`}>
          <Checkbox>记住密码</Checkbox>
          <Button type="link" danger>
            忘记密码？
          </Button>
        </div>
        <Space
          direction="vertical"
          size={'large'}
          className={styles['flex-item']}
        >
          <Button
            block
            type="primary"
            size="large"
            className={styles['action-btn']}
          >
            登录
          </Button>
          <Button
            block
            size="large"
            icon={<GithubOutlined />}
            className={styles['action-btn']}
          >
            使用 Github 登录
          </Button>
          <div className={styles['sign-up-text']}>
            还没有账号？
            <Button type="link" danger>
              注册
            </Button>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default Login;
