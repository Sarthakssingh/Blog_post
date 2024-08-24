import { Route} from 'react-router-dom'
import Cookie from 'js-cookie'
// import withRouter from './withRouter'

const ProtectedRoute = children => {
  const token = Cookie.get('jwt_token')
  console.log(children)
  if (token === undefined) {
    const { navigate } = this.props;
    navigate("/login");
  }
  return <Route {...children} />
}

export default (ProtectedRoute)