import './style/index.scss';

import React from 'react';
//
// import Nav from './components/Nav.jsx';
// import List from './components/List.jsx';
//
// // 备用数据，如果请求接口出错，改用备用数据
// const resData = {
//     ...require('./../../../database/md-data1.json'),
//     ...require('./../../../database/md-data2.json')
// };

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { contentStore, setContentType } = this.props;

        return (
            <div className="main-container">
                <h1>123</h1>
                {/* <Nav />
                <List data={ resData } /> */}
            </div>
        )
    }
}
