import React from 'react';

import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import {
  SideBarUser,
  BookingContent,
  InformationUser,
  ImportView,
  BookingImport,
} from '../../components/index';

import { DirectoryContainer } from '../../containers/index';

const UserPage = ({ match }) => (
  <Layout style={{ minHeight: '60vh', marginTop: '-3.6rem' }}>
    <SideBarUser />
    <Switch>
      <Route exact path={`${match.url}`} component={InformationUser} />
      <Route exact path={`${match.url}/booking`} component={BookingContent} />
      <Route exact path={`${match.url}/upload`} component={ImportView} />
      <Route exact path={`${match.url}/shop`} component={DirectoryContainer} />
      <Route
        exact
        path={`${match.url}/booking-import`}
        component={BookingImport}
      />
    </Switch>
  </Layout>
);
export default withRouter(UserPage);
