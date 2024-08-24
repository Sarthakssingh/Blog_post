import {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Axios from 'axios'
import BlogCard from './BlogCard/BlogCard'


class Body extends Component{

  state = {
    blogList:[],
    author:"",
    blog:""
  }

  allBlogs = async (event)=>{
    await Axios.get("http://localhost:3000/posts/").then(response => {console.log(response.data)
      this.setState({blogList:response.data})
    }).catch((error)=>console.log(error))
  }

  componentDidMount(){
    this.allBlogs()
  }

  renderblogs = () => {
    const {blogList} = this.state
    return(
      <div>{blogList.map(blog => <BlogCard blogdata ={blog} deleteBlogPost = {this.deleteBlogPost}/>)}</div>
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
      await Axios.post('http://localhost:3000/posts/', postData, axiosConfig).then(response => {alert(response.data)
        this.allBlogs()
      }).catch((error)=> console.log(error));
  }

  renderBlogForm = () => {
    return(
      <form onSubmit={this.submitEvent}>
      <label>Enter your name:
        <input type="text"  onChange={(e)=> this.setState({author:e.target.value})} />
      </label>
      <label>Enter your blog:
        <textarea  type="text" rows="8" cols="50" onChange={(e)=> this.setState({blog:e.target.value})}/>
      </label>
      <button>Submit</button>
    </form>
    )
  }

  deleteBlogPost = async (id) => {
    await Axios.delete(`http://localhost:3000/posts/${id}`).then(response => {alert(response.data,"Please Referesh the page!")
      this.allBlogs()
    }).catch((error)=>console.log(error))
  }

  render(){

  return (
    <div>
      <Header/>
      <div>
        {this.renderblogs()}
        {this.renderBlogForm()}
      </div>


      <Footer/>      
    </div>
  )
}
}
export default Body