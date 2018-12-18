import React from 'react';

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
                    { name: 'WF', max: 55 },
                    { name: 'WB', max: 55 },
                    { name: 'Native', max: 55 },
                    { name: 'Other', max: 55 },
                    { name: 'Skill', max: 55 },
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
        const myChart = echarts.init(document.getElementById('skip-detail-container'));
        myChart.setOption(this.option);
    }

    render () {
        return (
            <aside className="skip-detail">
                <h2 className="title">技能树</h2>
                <div id="skip-detail-container" className="skip-detail-container" />
            </aside>
        );
    }
}
