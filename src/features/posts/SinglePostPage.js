import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import TimeAgo from './TimeAgo';
import PostAuthor from './PostAuthor';



 const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <PostAuthor userId={post.user} />
        <TimeAgo/>
      </article>
    </section>
  )
}

export default SinglePostPage;