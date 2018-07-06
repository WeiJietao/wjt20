import './style/index.scss';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import request from 'superagent';

import Nav from './components/Nav.jsx';
import ArticleList from './components/ArticleList.jsx';
import ArticleCont from './components/ArticleCont.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: null,
            data: [],
            ifShowNav: true,
            ifShowList: true,
            ifShowCont: false,
            articleIndex: 0
        };
    }

    setShowNav = (ifShowNav = !this.state.ifShowNav) => {
        this.setState({
            ifShowNav
        });
    }

    setShowList = (ifShowList = !this.state.ifShowList) => {
        this.setState({
            ifShowList
        });
    }

    setShowCont = (ifShowCont = !this.state.ifShowCont, articleIndex = this.state.articleIndex) => {
        this.setState({
            ifShowCont,
            articleIndex
        });
    }

    componentWillMount() {
        const mode = window.location.hostname === 'weijietao.github.io' ? 'PROD' : 'DEV';

        if (window.localStorage._ARTICLE_) {
            // 直接从缓存中拿数据
            this.setState({
                data: JSON.parse(window.localStorage._ARTICLE_),
                mode
            })
        } else {
            // 请求接口拿数据
            request
                .get('/database/markdown-data.json')
                .end((err, res) => {
                    window.localStorage._ARTICLE_ = res.text;
                    this.setState({
                        data: JSON.parse(res.text),
                        mode
                    });
                });
        }
    }

    render() {
        const { contentStore, setContentType } = this.props;
        const { mode, data, ifShowNav, ifShowList, ifShowCont, articleIndex } = this.state;
        const { setShowNav, setShowList, setShowCont } = this;

        return (
            <div class="main-container">
                <Nav mode={ mode }
                     ifShowNav={ ifShowNav } />

                <ArticleList mode={ mode }
                             data={ data }
                             ifShowList={ ifShowList }
                             ifShowCont={ ifShowCont }
                             setShowNav={ setShowNav }
                             setShowList={ setShowList }
                             setShowCont={ setShowCont } />

                <ArticleCont mode={ mode }
                             data={ data }
                             articleIndex={ articleIndex }
                             ifShowCont={ ifShowCont }
                             setShowNav={ setShowNav }
                             setShowList={ setShowList }
                             setShowCont={ setShowCont } />
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
