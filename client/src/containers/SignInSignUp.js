import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingUser } from '../redux/user/user.selector';
import WithSpinner from '../hocs/WithSpinner/WithSpinner';
import SignInSignUp from '../pages/SignInSignUp/SignInSignUp';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingUser,
});

const SignSignUpContainer = connect(
  mapStateToProps,
  null
)(WithSpinner(SignInSignUp));

export default SignSignUpContainer;
