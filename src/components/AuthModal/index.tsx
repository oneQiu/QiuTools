import { Root, createRoot } from 'react-dom/client';
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

  return <Login />;
};

export let authRoot: Root | null = null;

AuthModal.open = () => {
  if (authRoot) return;
  const authDiv = document.createElement('div');
  document.body.appendChild(authDiv);
  const root = createRoot(authDiv);
  root.render(<AuthModal />);
  authRoot = root;
};

AuthModal.close = () => {
  authRoot?.unmount();
  authRoot = null;
};

export default AuthModal;
