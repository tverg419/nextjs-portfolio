import { NextPage } from 'next'
import ArticleList from '../components/ArticleList.js'

const Blog: NextPage = ({ articles } ) => {

    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    )
}
export default Blog

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

type article = {
    userId: number,
    id: number,
    body: string,
    title:string,
}