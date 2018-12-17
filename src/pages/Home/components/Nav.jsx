import React from 'react';

export default class Nav extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">首页</li>
                    <li className="nav-item">文章分类</li>
                    <li className="nav-item">开源项目</li>
                </ul>
            </nav>
        );
    }
}
