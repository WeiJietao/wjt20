import React from 'react';

export default class ArticleList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { staticData } = this.props;
        const { resource, file } = window.publicData;

        return (
            <ul className="article-list">
                {
                    Object.keys(staticData).map((key, index) =>
                        <a key={index}
                            href={`${resource}/pages/article/${file}?_id=${key}`}>
                            <li className="article-item">
                                { staticData[key].name }<i className="arrow" />
                            </li>
                        </a>
                    )
                }
            </ul>
        )
    }
}
