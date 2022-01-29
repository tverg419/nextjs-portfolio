import styles from "../styles/Article.module.css"
import Article from "./Article.js"

const ArticleList = ({ articles }) => {
    return (
        <div className={styles.grid}>
            {articles.map((a) => (
                <Article post={a}/>
            ))}
        </div>
    )
}

export default ArticleList