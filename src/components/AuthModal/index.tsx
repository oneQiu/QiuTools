import { createRoot } from 'react-dom/client';
import Login from './widgets/Login';
import { useEffect } from 'react';

const AuthModal = () => {
  useEffect(() => {
    // 监听 ESC
    document.addEventListener('keydown', onKeyDownListener);
    return () => {
      document.removeEventListener('keydown', onKeyDownListener);
    };
  }, []);

  const onKeyDownListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      AuthModal.close();
    }
  };

  return <Login onClose={AuthModal.close} />;
};

const currStatus = {
  flag: false,
  type: 1,
  root: null,
};

AuthModal.open = (type = 1) => {
  if (currStatus.flag) return;
  const authDiv = document.createElement('div');
  document.body.appendChild(authDiv);
  const root = createRoot(authDiv);
  root.render(<AuthModal />);
  Object.assign(currStatus, {
    type,
    root,
    flag: true,
  });
};

AuthModal.close = () => {
  (currStatus.root as any)?.unmount();
  currStatus.flag = false;
};

export default AuthModal;
