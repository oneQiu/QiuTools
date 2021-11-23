import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/models';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
