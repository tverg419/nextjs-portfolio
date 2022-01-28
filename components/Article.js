const Article = ({ post }) => {
    return (
        <div className='card' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default Article