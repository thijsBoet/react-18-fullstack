import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
);
