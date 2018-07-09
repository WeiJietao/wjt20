import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        return (
            <ul className="article-list-container">
            {
                Object.keys(data).map((item, index) => {
                    return (<a key={ index }
                               href={ __DEV__
                                      ? '/pages/ArticleCont/index.test.html?aid=' + item + '#' + index
                                      : 'https://weijietao.github.io/wjt20/article.html?aid=' + item + '#' + index }>
                               <li className="article-list-item">
                                   { data[item].name.replace('.md', '') }
                               </li>
                            </a>)
                })
            }
            </ul>
        )
    }
}
