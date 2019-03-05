import React from 'react';
import './style.scss';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ifShowQRcode: false
        };
    }

    render () {
        const { navList } = this.props;
        const { ifShowQRcode } = this.state;

        return (
            <header className="header">
                <figure className="info-container">
                    <img className="avatar" src="https://avatars3.githubusercontent.com/u/18640419?s=460&v=4" />
                    <ul className="pc-detail">
                        <li className="pc-detail-item author-name">WJT20</li>
                        <li className="pc-detail-item">
                            <span className="label">github : </span>
                            <a className="value" href="https://github.com/WeiJietao">WeiJietao</a>
                        </li>
                        <li className="pc-detail-item wechat-item"
                            onMouseEnter={() => this.setState({ifShowQRcode: true})}
                            onMouseLeave={() => this.setState({ifShowQRcode: false})}>
                            <span className="label">微信 : </span>
                            <span className="value">DG_WJT20</span>
                            <figure className={ifShowQRcode ? "QRcode-container" : "hide"}>
                                <img className="QRcode-img" src="https://raw.githubusercontent.com/WeiJietao/wjt20/master/src/images/w3.png" />
                            </figure>
                        </li>
                        <li className="pc-detail-item">
                            <span className="label">邮箱 : </span>
                            <span className="value">13415156317@163.com</span>
                        </li>
                    </ul>
                    <ul className="mb-detail">
                        <li className="mb-detail-item author-name">WJT20</li>
                        <li className="mb-detail-item">github</li>
                        <li className="mb-detail-item">微信</li>
                        <li className="mb-detail-item">邮箱</li>
                    </ul>
                </figure>

                <nav className="nav">
                    <ul className="nav-list">
                    {
                        navList.map((item, index) => {
                            const {
                                className = '',
                                clickListener = () => {},
                                name = ''
                            } = item;
                            return (
                                <li key={index}
                                    className={['nav-item',className].join(' ')}
                                    onClick={item.clickListener}>{ name }</li>
                            );
                        })
                    }
                    </ul>
                </nav>
            </header>
        );
    }
}
