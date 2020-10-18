import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsUpdatingUser } from '../redux/user/user.selector';
import { forgotPasswordStart } from '../redux/user/user.action';
import withSpinner from '../hocs/WithSpinner/WithSpinner';
import { ForgotPassword } from '../components';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUpdatingUser,
});
const mapDispatchToProps = (dispatch) => ({
  forgotPasswordStart: (email) => dispatch(forgotPasswordStart(email)),
});
const ForgotPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withSpinner(ForgotPassword));

export default ForgotPasswordContainer;
