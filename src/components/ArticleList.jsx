import React from 'react';

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    clickVisitArticleCont(index) {
        const { setShowNav, setShowList, setShowCont } = this.props;
        setShowNav();
        setShowList();
        setShowCont(true, index);
    }

    render() {
        const { ifShowList } = this.props;

        return (
            <ul className="article-list-container" style={{ display: ifShowList ? 'block' : 'none' }} >
            {
                this.props.data.map((item, index) => {
                    return <li key={ index } className="article-list-item" onClick={ () => this.clickVisitArticleCont(index) } >{ item.name.replace('.md', '') }</li>
                })
            }
            </ul>
        )
    }
}
