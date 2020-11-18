import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styled.global';
import ResetStyle from './styled.reset';

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<React.Fragment>
			<ResetStyle />
			<GlobalStyle />
			<App />
		</React.Fragment>
	</React.StrictMode>,
	document.getElementById('root')
);
