import './style/index.scss';
import React from 'react';
import staticData from './../data.js';

import Header from './../../common/components/Header';
import SkillTree from './../../common/components/SkillTree';

export default class Article extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ifShowSkillDetail: true
        }
    }

    componentWillMount () {
        if (document.body.clientWidth < 900) {
            this.setState({ ifShowSkillDetail: false });
        }
    }

    render() {
        const { resource, file } = window.publicData;
        const { ifShowSkillDetail } = this.state;
        const navList = [
            {
                name: '首页',
                clickListener: () => {
                    window.location.href = `${resource}/pages/home/${file}`
                }
            },
            {
                name: '技能树',
                className: 'skill-tree',
                clickListener: () => {
                    this.setState({
                        ifShowSkillDetail: !ifShowSkillDetail
                    });
                }
            }
        ];
        const id = window.location.search.replace('?_id=', '');

        return (
            <div className="main-container">
                <Header navList={navList} />

                {
                    ifShowSkillDetail &&
                        <SkillTree ifShowSkillDetail={ifShowSkillDetail} />
                }

                <article
                    className="article"
                    dangerouslySetInnerHTML={{ __html: decodeURI(staticData[id].cont) }} />
            </div>
        )
    }
}
