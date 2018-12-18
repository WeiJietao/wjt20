import React from 'react';

export default class AuthorInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ifShowQRcode: false
        };
    }

    render () {
        const { ifShowQRcode } = this.state;

        return (
            <figure className="info-container">
                <img className="avatar" src="https://avatars3.githubusercontent.com/u/18640419?s=460&v=4" />
                <ul className="url-list">
                    <li className="url-item author-name">WJT20</li>
                    <li className="url-item">
                        <span className="label">Github : </span>
                        <a className="value" href="https://github.com/WeiJietao">WeiJietao</a>
                    </li>
                    <li className="url-item wechat-item"
                        onMouseEnter={() => this.setState({ifShowQRcode: true})}
                        onMouseLeave={() => this.setState({ifShowQRcode: false})}>
                        <span className="label">微信 : </span>
                        <span className="value">Mercenary_WJT20</span>
                        <figure className={ifShowQRcode ? "QRcode-container" : "hide"}>
                            <img className="QRcode-img" src="https://raw.githubusercontent.com/WeiJietao/wjt20/master/src/images/w3.png" />
                        </figure>
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
