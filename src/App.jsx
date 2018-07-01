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
        this.state = {
            mode: null
        };
    }

    componentWillMount() {
        this.setState({
            mode: window.location.hostname === 'weijietao.github.io' ? 'PROD' : 'DEV'
        });
    }

    render() {
        const { contentStore, setContentType } = this.props;

        return (
            <div class="main-container">
                <Nav mode={ this.state.mode } />
                <ArticleList mode={ this.state.mode } />
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
