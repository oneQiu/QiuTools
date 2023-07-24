import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from '@/routes';
import { Provider } from 'react-redux';
import './index.css';
import { ConfigProvider } from 'antd';
import store from './stores';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: '898BFB' } }}>
        <RouterProvider router={routes} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
