import './style/index.scss';

import React from 'react';

import Nav from './components/Nav.jsx';
import List from './components/List.jsx';

// 备用数据，如果请求接口出错，改用备用数据
const resData = {
    ...require('./../../../database/md-data1.json'),
    ...require('./../../../database/md-data2.json')
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { contentStore, setContentType } = this.props;

        return (
            <div className="main-container">
                <Nav />
                <List data={ resData } />
            </div>
        )
    }
}
