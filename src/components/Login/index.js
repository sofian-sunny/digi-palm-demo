import { connect } from 'react-redux'
import { fetchLogin } from '../../redux/actions/loginActions';
import { Login } from './Login'

const mapStateToProps = state => ({
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  })
  
  const mapActionCreators = {
    fetchLogin,
  };

export default connect(mapStateToProps, mapActionCreators)(Login)
