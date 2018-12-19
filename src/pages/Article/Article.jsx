import './style/index.scss';
import React from 'react';
import staticData from './../data.js';

import Header from './../../common/components/Header';

export default class Article extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        const id = window.location.search.replace('?_id=', '');
        return (
            <div className="main-container">
                <Header />

                <article
                    className="article"
                    dangerouslySetInnerHTML={{ __html: decodeURI(staticData[id].cont) }} />
            </div>
        )
    }
}
