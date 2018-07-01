import './style/index.scss';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';

import Nav from './components/Nav.jsx';
import ArticleList from './components/ArticleList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        const { contentStore, setContentType } = this.props;

        return (
            <div class="main-container">
                <Nav />
                <ArticleList />
            </div>
        )
    }
}

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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
