import React from 'react';
import { Layout } from 'antd';

import Navigation from './components/navigation/navigation.component';
//import { checkUserSession } from './redux/user/user.action';
//import Page404 from './pages/404/404.component';
import Routes from './routes/index';


const App = () => (
  <div className="App">
    <Layout>
      <Navigation />
        <Routes />
    </Layout>
  </div>

);





export default (App);
