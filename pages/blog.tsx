import { NextPage } from 'next'
import internal from 'stream'
import Article from '../components/Article.js'

const Blog: NextPage = ({ articles } ) => {
    console.log(typeof articles)
    return (
        <div>
            <ul>
                {articles.map((a) => {
                    return (
                        <Article post={a}/>
                    )
                })}
            </ul>
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