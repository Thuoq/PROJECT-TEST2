import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';
import { Navigation, Footer } from './components/index';
import { selectCurrentUser } from './redux/user/user.selector';

import Routes from './routes/index';

const App = ({ currentUser }) => (
  <div className="App">
    <Layout.Content style={{ backgroundColor: '#fff' }}>
      <Navigation />
      <Routes currentUser={currentUser} />
    </Layout.Content>
    <Footer />
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
