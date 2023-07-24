import { Button, Checkbox, Form, Input, Space, message } from 'antd';
import { CloseOutlined, GithubOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { useEffect, useState } from 'react';
import AuthModal from '..';
import { getGitHubAuthUri, signIn } from '@/services/user';
import { sleep } from '@/utils/toolkit';
import { REMEBER_PASSWORD, TOKEN_KEY } from '@/constants/storageKey';

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [wrapStyle, setWrapStyle] = useState<any>();
  const [formRef] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsActive(true);
    setWrapStyle(undefined);
    return onClose;
  }, []);

  const onClose = () => {
    setIsActive(false);
    setTimeout(() => {
      setWrapStyle({
        display: 'none',
      });
      AuthModal.close();
    }, 100);
  };

  const onSubmit = async () => {
    const values = formRef.getFieldsValue();
    setLoading(true);
    try {
      const res = await signIn(values);
      if (res.flag) {
        message.success('登录成功');
        await sleep(500);
        localStorage.setItem(TOKEN_KEY, res.data);
        onClose();
        window.location.reload();
      }
    } catch {
      setLoading(false);
    }
  };

  const signInByGithub = async () => {
    const res = await getGitHubAuthUri();
    if (res.flag) {
      console.log(res.flag, res.data);
      //       const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
      // width=0,height=0,left=-1000,top=-1000`;
      window.open(res.data, '登录');
    }
  };

  return (
    <div
      className={`${styles['login-modal']} ${!isActive && styles.active}`}
      style={wrapStyle}
    >
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
        <Form className={styles['flex-item']} form={formRef}>
          <Form.Item name="username">
            <Input placeholder="用户名" size="large" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="密码" size="large" />
          </Form.Item>
        </Form>
        <div className={`${styles['flex-item']} ${styles['help-bar']}`}>
          <Checkbox
            defaultChecked={!!localStorage.getItem(REMEBER_PASSWORD)}
            onChange={(e) => {
              localStorage.setItem(
                REMEBER_PASSWORD,
                e.target.checked ? 'checked' : ''
              );
            }}
          >
            记住密码
          </Checkbox>
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
            onClick={onSubmit}
            className={styles['action-btn']}
            loading={loading}
          >
            登录
          </Button>
          <Button
            block
            size="large"
            icon={<GithubOutlined />}
            onClick={signInByGithub}
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
