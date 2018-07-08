import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="nav-container">
                <figure className="bg-container">
                    <img className="bg-img"
                         src="https://raw.githubusercontent.com/WeiJietao/wjt20/master/src/images/w1.jpg" />
                         {/* src={ require('./../../../images/w1.jpg') } /> */}
                </figure>
                <figure className="avator-container">
                    <img className="avator"
                         src="https://raw.githubusercontent.com/WeiJietao/wjt20/master/src/images/w2.png" />
                         {/* src={ require('./../../../images/w2.png') } /> */}
                    <strong className="user-name">WJT20</strong>
                </figure>
            </nav>
        )
    }
}
