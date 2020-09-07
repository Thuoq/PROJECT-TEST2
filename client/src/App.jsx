import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';
import { selectCurrentUser } from './redux/user/user.selector';

import Navigation from './components/navigation/navigation.component';
//import { checkUserSession } from './redux/user/user.action';
//import Page404 from './pages/404/404.component';
import Routes from './routes/index';


const App = ({currentUser,...props}) => {

  return(
  <div className="App">
    <Layout>
      <Navigation />
        <Routes currentUser = {currentUser} />
    </Layout>
  </div>

)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

export default connect(mapStateToProps)(App);
