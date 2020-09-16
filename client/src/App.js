import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';
import { selectCurrentUser } from './redux/user/user.selector';
import Navigation from './components/Navigation/Navigation';

import Routes from './routes/index';
import Footer from './components/Footer/Footer';

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
