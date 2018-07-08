import React from 'react';
import { Link } from 'react-router-dom';

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
                    return (
                        <Link key={ index }
                              to={{
                                  pathname: '/article',
                                  search: '?aid=' + item,
                                  hash: '#' + index,
                                  state: {
                                      fromDashboard: true
                                  }
                              }}>
                            <li className="article-list-item">
                                { data[item].name.replace('.md', '') }
                            </li>
                        </Link>
                    );
                })
            }
            </ul>
        )
    }
}
