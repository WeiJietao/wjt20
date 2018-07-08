import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

// import configureStore from './store/configureStore.js';
// import actions from './actions';
// const store = configureStore();

//导入组件
import App from './router/App.jsx';

// 将state对应值绑定到props上
function mapStateToProps(state) {
    return {
        contentStore: state.contentStore,
    }
}

// 将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

// 通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Routers);

render(
    <AppContainer>
        <App />
        {/* <Provider store={store}>
            <App />
        </Provider> */}
    </AppContainer>,
    document.getElementById('app')
);

// 热更新通知
if (module.hot && process.env.MODE === 'DEVELOPMENT'){
    module.hot.accept();
}
