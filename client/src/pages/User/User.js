import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarUser from '../../components/SidebarUser/SidebarUser';
import BookingContent from '../../components/BookingContent/BookingContent';
import InformationUser from '../../components/InformationUser/InformationUser';

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
