import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarUser from '../../components/sidebar-user/sidebar-user.component';
import BookingContent from '../../components/BookingContent/booking-content.component';
import InformationUser from '../../components/information-user/information-user.component';

const UserPage = ({ match }) => (
  <Layout style={{ minHeight: '60vh', marginTop: '-3.6rem' }}>
    <SideBarUser />
    <Switch>
      <Route exact path={`${match.url}`} component={InformationUser} />
      <Route exact path={`${match.url}/booking`} component={BookingContent} />
    </Switch>
  </Layout>
);
export default withRouter(UserPage);
