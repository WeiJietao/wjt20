import './style/index.scss';

import React from 'react';
// import { Link } from 'react-router-dom';
import request from 'superagent';

import { getUrlSearchParams } from './../../common/modules/index.js';

// 备用数据，如果请求接口出错，改用备用数据
const resData = {
    ...require('./../../../database/md-data1.json'),
    ...require('./../../../database/md-data2.json')
};

export default class ArticleCont extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            aid: 0
        };
    }

    componentWillMount() {
        let data;

        window.localStorage._ARTICLE_ = JSON.stringify(resData);
        data = resData;

        this.setState({
            data,
            ...getUrlSearchParams()
        });
    }

    render() {
        const { data, aid } = this.state;
        const contData = data[aid] || { name: '', cont: '' };
        const originalPath = 'https://github.com/WebUnion-core/doc-repositort/blob/master/WJT20/' + encodeURI(contData.name);

        return (
            <section className="article-content-container" >
                <h1 className="head-bar">
                    <a href={ __DEV__
                              ? '/pages/Home/index.test.html'
                              : 'https://weijietao.github.io/wjt20/home.html'
                        }>
                        <i className="icon-arrow-left back-icon"></i>
                    </a>
                    <span>{ contData.name.replace('.md', '') }</span>
                </h1>
                <article className="article-content" dangerouslySetInnerHTML={{ __html: decodeURI(contData.cont) }} ></article>
                <a className="original-link" href={ originalPath }>{ '原文链接: ' + originalPath }</a>
            </section>
        )
    }
}
