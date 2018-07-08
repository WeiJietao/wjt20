import './style/index.scss';

import React from 'react';
// import { Link } from 'react-router-dom';
import request from 'superagent';

import { getUrlSearchParams } from './../../common/modules';

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

    // // TODO 递归请求多个接口数据，使用Promise更佳
    // requestAllData(ary, endCallback, errorCallback, data = []) {
    //     if (ary.length > 0) {
    //         const port = ary.shift();
    //         request
    //             .get(port)
    //             .end((err, res) => {
    //                 if (err) {
    //                     errorCallback();
    //                 } else {
    //                     this.requestAllData(
    //                         ary,
    //                         endCallback,
    //                         errorCallback,
    //                         [...data, ...JSON.parse(res.text)]
    //                     );
    //                 }
    //             });
    //     } else {
    //         endCallback(data);
    //     }
    // }

    componentWillMount() {
        let data;

        // if (window.localStorage._ARTICLE_) {
        //     // 直接从缓存中拿数据
        //     data = JSON.parse(window.localStorage._ARTICLE_);
        // } else {
        //     // TODO 请求接口拿数据，等待接入redux
        //     this.requestAllData(
        //         [
        //             '/_db/md-data1.json',
        //             '/_db/md-data2.json'
        //         ],
        //         (data) => {
        //             window.localStorage._ARTICLE_ = JSON.stringify(data);
        //             this.setState({
        //                 data
        //             });
        //         },
        //         () => {
        //             window.localStorage._ARTICLE_ = JSON.stringify(resData);
        //             data = resData;
        //         }
        //     );
        // }

        window.localStorage._ARTICLE_ = JSON.stringify(resData);
        data = resData;

        this.setState({
            data,
            ...getUrlSearchParams()
        });
    }

    getLink() {
        // if (__DEV__) {
        //     return <Link to="/home"><i className="icon-arrow-left back-icon"></i></Link>;
        // } else {
            return <a href="https://weijietao.github.io/wjt20/home.html"><i className="icon-arrow-left back-icon"></i></a>;
        // }
    }

    render() {
        const { data, aid } = this.state;
        const contData = data[aid] || { name: '', cont: '' };
        const originalPath = 'https://github.com/WebUnion-core/doc-repositort/blob/master/WJT20/' + encodeURI(contData.name);

        return (
            <section className="article-content-container" >
                <h1 className="head-bar">
                    { this.getLink() }
                    <span>{ contData.name.replace('.md', '') }</span>
                </h1>
                <article className="article-content" dangerouslySetInnerHTML={{ __html: decodeURI(contData.cont) }} ></article>
                <a className="original-link" href={ originalPath }>{ '原文链接: ' + originalPath }</a>
            </section>
        )
    }
}
