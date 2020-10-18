import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectIsUpdatingUser } from '../redux/user/user.selector';
import { resetPasswordStart } from '../redux/user/user.action';
import withSpinner from '../hocs/WithSpinner/WithSpinner';
import { ResetPassword } from '../components';

const mapStatToProps = createStructuredSelector({
  isLoading: selectIsUpdatingUser,
});

const mapDispatchToProps = (dispatch) => ({
  resetPasswordStart: (data) => dispatch(resetPasswordStart(data)),
});
const ResetPassWordContainer = withRouter(
  connect(mapStatToProps, mapDispatchToProps)(withSpinner(ResetPassword))
);

export default ResetPassWordContainer;
