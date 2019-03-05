import React from 'react';
import './style.scss';

export default class SkillTree extends React.Component {
    constructor (props) {
        super(props);
        this.option = {
            radar: {
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 0,
                        padding: [3, 5]
                   }
                },
                indicator: [
                    { name: '前端', max: 55 },
                    { name: '后端', max: 55 },
                    { name: '原生', max: 55 },
                    { name: '其他', max: 55 },
                    { name: '编程基础', max: 55 },
               ],
               radius: 80
            },
            series: [
                {
                    type: 'radar',
                    data : [
                        { value : [50, 27, 28, 20, 20] }
                    ]
                }
            ]
        };
    }

    componentDidMount () {
        const myChart = echarts.init(document.getElementById('skill-detail-container'));
        myChart.setOption(this.option);
    }

    componentWillReceiveProps () {
        const myChart = echarts.init(document.getElementById('skill-detail-container'));
        myChart.setOption(this.option);
    }

    render () {
        const { ifShowSkillDetail } = this.props;
        return (
            <aside className="skill-detail">
                <h2 className="title">技能树</h2>
                <div id="skill-detail-container" className="skill-detail-container" />
            </aside>
        );
    }
}
