import React from 'react';
// import { Link } from 'react-router-dom';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    getLink(item, index, data) {
        // if (__DEV__) {
        //     return (
        //         <Link key={ index }
        //               to={{
        //                   pathname: '/article',
        //                   search: '?aid=' + item,
        //                   hash: '#' + index,
        //                   state: {
        //                       fromDashboard: true
        //                   }
        //               }}>
        //             <li className="article-list-item">
        //                 { data[item].name.replace('.md', '') }
        //             </li>
        //         </Link>
        //     )
        // } else {
            return (
                <a key={ index }
                   href={ 'https://weijietao.github.io/wjt20/article.html?aid=' + item + '#' + index }>
                   <li className="article-list-item">
                       { data[item].name.replace('.md', '') }
                   </li>
                </a>
            )
        // }
    }

    render() {
        const { data } = this.props;

        return (
            <ul className="article-list-container">
            {
                Object.keys(data).map((item, index) => {
                    return this.getLink(item, index, data);
                })
            }
            </ul>
        )
    }
}
