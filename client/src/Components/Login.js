import {Component} from 'react'
import Cookies from 'js-cookie'
import withRouter from './withRouter'
import Axios from 'axios'
import './Login.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  // onSubmitSuccess = jwtToken => {
  //   const {history} = this.props

  //   Cookies.set('jwt_token', jwtToken, {
  //     expires: 30,
  //     path: '/',
  //   })
  //   history.replace('/')
  // }

  // onSubmitFailure = errorMsg => {
  //   console.log(errorMsg)
  //   this.setState({showSubmitError: true, errorMsg})
  // }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json'
      }
    };
    await Axios.post('http://localhost:3000/login/', userDetails, axiosConfig).then((response) => {console.log(response)
    Cookies.set('jwt_token', response.jwtToken, {
      expires: 30,
      path: '/',
    })
    const { navigate } = this.props;
    navigate("/login");
    }).catch((error) => {console.log(error)
      this.setState({showSubmitError: true, errorMsg:error.message})
    })
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const { navigate } = this.props;
    navigate("/");
    }

    return (
        <div className="login-container">
          <div className='heading'>
          <img
            className="login-heading"
            src="https://blogsspreadspot.com/wp-content/uploads/2021/11/blog.jpg"
            alt="login website logo"
          />
          <button className='register-button' onClick={()=> {const { navigate } = this.props;
    navigate("/register");}}>Register</button>
          </div>
          <form className="login-contents" onSubmit={this.submitForm}>
            <h1 className="login-content-heading">Login</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
    )
  }

}

export default withRouter(Login)