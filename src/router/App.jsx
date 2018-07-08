import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home.jsx';
import ArticleCont from './ArticleCont/ArticleCont.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(__DEV__);
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/home' component={ Home } />
                        <Route path='/article' component={ ArticleCont } />
                    </Switch>

                    <footer className="footer">页脚[样式暂未定义]</footer>
                </div>
            </Router>
        )
    }
}
