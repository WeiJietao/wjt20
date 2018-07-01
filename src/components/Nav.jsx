import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="nav-container">
                <figure className="bg-container">
                    <img className="bg-img" src={ this.props.mode === 'DEV' ? require('./../images/w1.jpg') : 'https://raw.githubusercontent.com/WeiJietao/wjt20/master/dist/d5f699d55c08627b76d32f97027eff19.jpg' } />
                </figure>
                <figure className="avator-container">
                    <img className="avator" src={ this.props.mode === 'DEV' ? require('./../images/w2.png') : 'https://raw.githubusercontent.com/WeiJietao/wjt20/master/dist/c83d1953b4b01cc80e476f5944f63a38.png' } />
                    <strong className="user-name">WJT20</strong>
                </figure>
            </nav>
        )
    }
}
