import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initStore } from './store';
import { Provider } from 'react-redux';
import { App } from './App';

const store = initStore();

ReactDOM.render(
	<Provider store = { store }>		
		<App />
  	</Provider>,  
  document.getElementById('root')
);
