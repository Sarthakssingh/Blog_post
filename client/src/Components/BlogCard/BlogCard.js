import React from 'react'
import './BlogCard.css'

const BlogCard = (props) => {
    const {blogdata,deleteBlogPost} = props
    const {author,blog,id} = blogdata
    const deleteBlog = () =>{
      deleteBlogPost(id);
    }
  return (
    <div className='blogcard-container'>
      <div className='contents'>
        <h4 className='blogcard-id'>{id}</h4>
        <p className='blogcard-blog'>{blog}</p>
        <p className='blogcard-author'>{author}</p>
        </div>
        <button className='delete-button' onClick={deleteBlog}>Delete</button>
    </div>
  )
}

export default BlogCard