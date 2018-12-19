import React from 'react';
import './style.scss';

import AuthorInfo from './AuthorInfo.jsx';
import Nav from './Nav.jsx';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <header className="header">
                <AuthorInfo />
                <Nav />
            </header>
        );
    }
}
