import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Home from './Home.jsx';

render(
    <AppContainer>
        <Home />
    </AppContainer>,
    document.getElementById('app')
);

// 热更新通知
if (module.hot && __DEV__){
    module.hot.accept();
}
