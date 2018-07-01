import React from 'react';

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);

        this.articleList = [
            {
                id: 1,
                title: 'Flex布局总结(一)',
                link: 'https://github.com/WeiJietao/LogBase/blob/master/Flex%E5%B8%83%E5%B1%80%E6%80%BB%E7%BB%93(%E4%B8%80).md'
            },
            {
                id: 2,
                title: 'webpack常规配置总结',
                link: 'https://github.com/WeiJietao/LogBase/blob/master/webpack%E5%B8%B8%E8%A7%84%E9%85%8D%E7%BD%AE%E6%80%BB%E7%BB%93.md'
            },
            {
                id: 3,
                title: 'Babel配置笔记',
                link: 'https://github.com/WeiJietao/LogBase/blob/master/Babel%E9%85%8D%E7%BD%AE%E7%AC%94%E8%AE%B0.md'
            },
            {
                id: 4,
                title: 'ES6常用知识点总结',
                link: 'https://github.com/WeiJietao/LogBase/blob/master/ES6%E5%B8%B8%E7%94%A8%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.md'
            },
            {
                id: 5,
                title: 'HTML5知识点总结',
                link: 'https://github.com/WeiJietao/LogBase/blob/master/HTML5%E7%9F%A5%E8%AF%86%E7%82%B9%E6%80%BB%E7%BB%93.md'
            }
        ];
    }

    render() {
        return (
            <ul className="article-list-container">
            {
                this.articleList.map((item, index) => {
                    return <a key="index" href={ item.link }><li className="article-list-item">{ item.title }</li></a>
                })
            }
            </ul>
        )
    }
}
