import {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Axios from 'axios'
import BlogCard from './BlogCard/BlogCard'
import './Body.css'
import Modal from './Modal'

class Body extends Component{

  state = {
    blogList:[],
    author:"",
    blog:"",
    open:false,
    currentid:''
  }

  allBlogs = async (event)=>{
    await Axios.get("https://render-blog-deployemnt.onrender.com/posts/").then(response => {console.log(response.data)
      this.setState({blogList:response.data})
    }).catch((error)=>console.log(error))
  }

  componentDidMount(){
    this.allBlogs()
  }

  renderblogs = () => {
    const {blogList} = this.state
    return(
      <div>{blogList.map(blog => <BlogCard blogdata ={blog} deleteBlogPost = {this.deleteBlogPost} editBlogPost = {this.editBlogPost}/>)}</div>
    )
  }

  submitEvent = async(event) => {
    event.preventDefault()
    const {author,blog} = this.state
    console.log(author,blog)
    var postData = {
        author:author,
        blog:blog
      };
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
      };
      await Axios.post('https://render-blog-deployemnt.onrender.com/posts/', postData, axiosConfig).then(response => {alert(response.data)
        this.allBlogs()
      }).catch((error)=> console.log(error));

      this.setState({author:"",blog:""})
  }

  renderBlogForm = () => {
    const {author,blog} = this.state
    return(
      <form className='form-container' onSubmit={this.submitEvent}>
        <h2>Create New Blog</h2>
      <label className='name-label'>Enter your name:
        <input className='name-input' value = {author} type="text"  onChange={(e)=> this.setState({author:e.target.value})} />
      </label>
      <label className='name-label'>Enter your blog:
        <input className='name-input' value={blog} type="text" onChange={(e)=> this.setState({blog:e.target.value})}/>
      </label>
      <button className='submit-button'>Submit</button>
    </form>
    )
  }

  editBlogPost = (id) => {
    this.setState({open:true,currentid:id})
  }

  deleteBlogPost = async (id) => {
    await Axios.delete(`https://render-blog-deployemnt.onrender.com/posts/${id}`).then(response => {alert(response.data,"Please Referesh the page!")
      this.allBlogs()
    }).catch((error)=>console.log(error))
  }

  handleClose = async() =>{
    this.setState({open:false})
    const {author,blog,currentid} = this.state
    console.log(author,blog)
    var postData = {
        author:author,
        blog:blog
      };
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
      };
      await Axios.put(`https://render-blog-deployemnt.onrender.com/posts/${currentid}`, postData, axiosConfig).then(response => {alert(response.data)
        this.allBlogs()
      }).catch((error)=> console.log(error));
      this.setState({author:"",blog:""})
  }

  SearchBlogPost = (searchVal) => {
    const {blogList} = this.state
    const newBlogList = blogList.filter((item) => {
      if (item.blog.toLowerCase()
          .includes(searchVal.toLowerCase())) { return item; }
        // eslint-disable-next-line
  })
  this.setState({blogList:newBlogList})
  }

  render(){
    const {open} = this.state
  return (
    <div>
      <Header SearchBlogPost ={this.SearchBlogPost}/>
      <div className='body-contents'>
        {this.renderblogs()}
        {this.renderBlogForm()}
        </div>
        <Modal isOpen={open} 
        >
                <>
                <label className='name-label'>Enter your name:
        <input className='name-input' type="text"  onChange={(e)=> this.setState({author:e.target.value})} />
      </label>
      <label className='name-label'>Enter your blog:
        <input className='name-input' type="text" onChange={(e)=> this.setState({blog:e.target.value})}/>
      </label>
                </>
                <button className='submit-button' onClick={this.handleClose}>Submit</button>
            </Modal>

      <Footer/>      
    </div>
  )
}
}
export default Body