import './style/index.scss';
import React from 'react';

import AuthorInfo from './components/AuthorInfo.jsx';
import Nav from './components/Nav.jsx';
import ArticleList from './components/ArticleList.jsx';

// 静态数据
const staticData = {
    ...require('./../../../database/md-data1.json'),
    ...require('./../../../database/md-data2.json')
};

export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.option = {
            title: {},
            tooltip: {},
            legend: {},
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 0,
                        padding: [3, 5]
                   }
                },
                indicator: [
                   { name: 'JavaScript', max: 35 },
                   { name: 'HTML', max: 35 },
                   { name: 'CSS', max: 35 },
                   { name: 'Node.js', max: 35 },
                   { name: 'PHP', max: 35 },
                   { name: 'Java', max: 35 },
                   { name: 'Android', max: 35 },
                   { name: 'React', max: 35 },
                   { name: 'Flutter', max: 35 },
                   { name: '其他', max: 35 }
               ],
               radius: 80
            },
            series: [
                {
                    type: 'radar',
                    data : [
                        {
                            value : [31, 5, 9, 13, 4, 10, 15, 5, 3, 27]
                        }
                    ]
                }
            ]
        };
    }

    componentDidMount () {
        const myChart = echarts.init(document.getElementById('skip-detail-container'));
        myChart.setOption(this.option);
    }

    render() {
        return (
            <div className="main-container">
                <header className="header">
                    <AuthorInfo />
                    <Nav />
                </header>

                <ArticleList staticData={staticData} />

                <aside className="skip-detail">
                    <h2 className="title">技能树</h2>
                    <div id="skip-detail-container" className="skip-detail-container" />
                </aside>
            </div>
        )
    }
}
