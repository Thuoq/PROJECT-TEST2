import { connect } from 'react-redux';
import HomePage from '../../components';

import { getUser, editUser } from '../redux/actions';

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

const mapActionToProps = {
  getUser,
  editUser,
};

export default connect(mapStateToProps, mapActionToProps)(HomePage);
