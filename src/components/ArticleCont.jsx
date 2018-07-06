import React from 'react';

export default class ArticleCont extends React.Component {
    constructor(props) {
        super(props);
    }

    clickVisitArticleList() {
        const { setShowNav, setShowList, setShowCont } = this.props;
        setShowNav();
        setShowList();
        setShowCont();
    }

    render() {
        const { mode, data, articleIndex, ifShowCont } = this.props;
        const contData = data[articleIndex];
        const originalPath = 'https://github.com/WebUnion-core/doc-repositort/blob/master/WJT20/' + encodeURI(contData.name);

        return (
            <section className="article-content-container" style={{ display: ifShowCont ? 'block' : 'none' }} >
                <h1 className="head-bar">
                    <i className="icon-arrow-left back-icon" onClick={ () => this.clickVisitArticleList() } ></i>
                    <span>{ contData.name.replace('.md', '') }</span>
                </h1>
                <article className="article-content" dangerouslySetInnerHTML={{ __html: decodeURI(contData.cont) }} ></article>
                <a className="original-link" href={ originalPath }>{ '原文链接: ' + originalPath }</a>
            </section>
        )
    }
}
