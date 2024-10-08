import React from 'react'
import './BlogCard.css'

const BlogCard = (props) => {
    const {blogdata,deleteBlogPost,editBlogPost} = props
    const {author,blog,id} = blogdata
    const deleteBlog = () =>{
      deleteBlogPost(id);
    }
    const editBlog = () => {
      editBlogPost(id)
    }
  return (
    <div className='blogcard-container'>
      <div className='contents'>
        <h4 className='blogcard-id'>{id}</h4>
        <p className='blogcard-blog'>{blog}</p>
        <p className='blogcard-author'>{author}</p>
        </div>
        <div className='buttons'>
        <button className='delete-button' onClick={deleteBlog}>Delete</button>
        <button className='edit-button' onClick={editBlog}>Edit</button>
        </div>
    </div>
  )
}

export default BlogCard