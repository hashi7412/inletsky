import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import GlobalStyle from './globalStyle';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle
		 />
		<App />
	</React.StrictMode>,
)