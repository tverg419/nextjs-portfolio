import Link from 'next/link'
import styles from '../styles/Article.module.css'

const Article = ({ post }) => {
    return (
        <Link href='/article/[id]' as={`/article/${post.id}`}>
            <a className={styles.card} key={post.id}>
                <h3>{post.title} &rarr;</h3>
                <p>{post.body}</p>
            </a>
        </Link>
    )
}

export default Article