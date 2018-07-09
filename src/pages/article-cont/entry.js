import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import ArticleCont from './ArticleCont.jsx';

render(
    <AppContainer>
        <ArticleCont />
    </AppContainer>,
    document.getElementById('app')
);

// 热更新通知
if (module.hot && __DEV__){
    module.hot.accept();
}
