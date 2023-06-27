import styles from '../index.module.less';
import { Button } from 'antd';

export default () => {
  return (
    <div className={styles['footer-wrap']}>
      Copyright©2023 oneQiu
      <Button
        className={styles.link}
        type={'link'}
        href={'https://beian.miit.gov.cn'}
        target={'_blank'}
      >
        赣ICP备19015181号-1
      </Button>
    </div>
  );
};
