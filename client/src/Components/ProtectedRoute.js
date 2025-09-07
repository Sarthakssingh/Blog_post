import { useNavigate } from 'react-router-dom'
import Cookie from 'js-cookie'
import withRouter from './withRouter'
import Body from "./Body";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    // const { navigate } = this.props;
    navigate("/login");
  }
  return <Body />
}

export default withRouter (ProtectedRoute);