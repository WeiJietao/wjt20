import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore.js';

const store = configureStore();

//导入组件
import App from './App.jsx';

render(
    <AppContainer>
        {/* <Provider store={store}>
            <App />
        </Provider> */}
        <h1>4</h1>
    </AppContainer>
    ,
    document.getElementById('app')
);

// 热更新通知
if (module.hot && process.env.MODE === 'DEVELOPMENT'){
    console.log('Hot watch start...');
    module.hot.accept();
}
