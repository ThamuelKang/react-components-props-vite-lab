// Article List
// a <main> element with the following components inside:
// An array of Article components (one component for each of the posts passed down as props to ArticleList)
// Make sure to assign a unique key attribute to each Article

import blogData from '../data/blog'
import Article from './Article'

function ArticleList() {
    const articles = blogData.posts

    return (
        articles.map((article) => {

            return (
                <main key={article.id}>
                    <Article title={article.title} date={article.date} preview={article.preview} />
                </main>
            )
        })
    )

}

export default ArticleList