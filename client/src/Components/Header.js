import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import withRouter from './withRouter'
import './Body.css'




const Header = (props) => {
  const {SearchBlogPost} = props

  const searchBlog = (e) =>{
    SearchBlogPost(e.target.value)
  }


  return (
    <nav className='header-nav'>
      <div className='header-logo-container'>
      <img
            className="logo-heading"
            src="https://blogsspreadspot.com/wp-content/uploads/2021/11/blog.jpg"
            alt="login website logo"
          />
        
      </div>
      <label className='search-label'>
      <input className='search-input' type ="text" onChange={searchBlog}/>
      Search here</label>
                <ul className='header-list'>
                    <li className='header-li'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='header-li'>
                        <button  onClick={()=> {const { navigate } = props;Cookies.remove('jwt_token')
    navigate("/login");}}>Logout</button>
                    </li>
                </ul>
            </nav>
  )
}

export default withRouter(Header);
