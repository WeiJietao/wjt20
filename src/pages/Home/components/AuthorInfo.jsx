import React from 'react';

export default class AuthorInfo extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <figure className="info-container">
                <img className="avatar" src="https://avatars3.githubusercontent.com/u/18640419?s=460&v=4" />
                <ul className="url-list">
                    <li className="url-item author-name">WJT20</li>
                    <li className="url-item">
                        <span className="label">Github : </span>
                        <span className="value">WeiJietao</span>
                    </li>
                    <li className="url-item">
                        <span className="label">微信 : </span>
                        <span className="value">Mercenary_WJT20</span>
                    </li>
                    <li className="url-item">
                        <span className="label">邮箱 : </span>
                        <span className="value">13415156317@163.com</span>
                    </li>
                </ul>
            </figure>
        );
    }
}
