import React from 'react';

export default class ArticleList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { staticData } = this.props;

        return (
            <ul className="article-list">
                {
                    Object.keys(staticData).map((key, index) =>
                        <li key={index} className="article-item">{ staticData[key].name }<i className="arrow" /></li>
                    )
                }
            </ul>
        )
    }
}
