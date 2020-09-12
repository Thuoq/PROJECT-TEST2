import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';
import { selectCurrentUser } from './redux/user/user.selector';
import Navigation from './components/navigation/navigation.component';
//import { checkUserSession } from './redux/user/user.action';
//import Page404 from './pages/404/404.component';
import Routes from './routes/index';
import Footer from './components/footer/footer.component';


const App = ({currentUser,...props}) => {

  return(
  <div className="App">
    <Layout.Content style={{backgroundColor:'#fff'}}>
      <Navigation />
        <Routes currentUser = {currentUser} />
      
    </Layout.Content>
    <Footer/>
  </div>

)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


export default connect(mapStateToProps)(App);
