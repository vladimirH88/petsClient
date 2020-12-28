import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './i18n/config';

import { store } from './redux/configureStore';
import App from './components/App/App';

ReactDOM.render(
    <Provider store={store}>
        <App /> </Provider>,
    document.getElementById('root')
);
