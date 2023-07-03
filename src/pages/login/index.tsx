import styles from './index.module.less';
import Lottie from 'lottie-react';
import sunAnimation from '@/assets/lotties/sun.json';
import loginAnimation from '@/assets/lotties/login.json';

export default () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.cover}>
          <Lottie
            animationData={sunAnimation}
            loop
            className={styles['sun-lottie']}
          />
          <Lottie
            animationData={loginAnimation}
            loop
            className={styles['login-lottie']}
          />
        </div>
        <div>
          <div>oneQiu</div>
        </div>
      </div>
    </div>
  );
};
