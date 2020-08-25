import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ContentHomePage from '../../components/content-homepage/content-homepage.component';
import CollectionOverView from '../collection-overview-page/collection-overview-page.component';

const HomePage = () => (

  <Layout>
    <Switch>
      <Route exact path="/" component={ContentHomePage} />
      <Route path="/productQuery" component={CollectionOverView} />
    </Switch>
  </Layout>

);
export default HomePage;
