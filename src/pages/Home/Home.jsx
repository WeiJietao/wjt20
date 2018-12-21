import './style/index.scss';
import React from 'react';
import staticData from './../data.js';

import Header from './../../common/components/Header';
import ArticleList from './components/ArticleList.jsx';
import SkillTree from './components/SkillTree.jsx';

export default class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <Header />
                <SkillTree />
                <ArticleList staticData={staticData} />
            </div>
        )
    }
}
