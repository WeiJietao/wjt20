import './style/index.scss';
import React from 'react';

import AuthorInfo from './components/AuthorInfo.jsx';
import Nav from './components/Nav.jsx';
import ArticleList from './components/ArticleList.jsx';
import SkillTree from './components/SkillTree.jsx';

// 静态数据
const staticData = {
    ...require('./../../../database/md-data1.json'),
    ...require('./../../../database/md-data2.json')
};

export default class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <header className="header">
                    <AuthorInfo />
                    <Nav />
                </header>

                <ArticleList staticData={staticData} />

                <SkillTree />
            </div>
        )
    }
}
