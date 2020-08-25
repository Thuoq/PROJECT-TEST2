import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarUser from '../../components/sidebar-user/sidebar-user.component';
import BookingContent from '../../components/booking-content/booking-content.component';
import InformationUser from '../../components/information-user/information-user.component';


const UserPage = ({ match }) => {
  return (
    <Layout style={{ minHeight: '60vh' }}>
      <SideBarUser />
      <Switch>
        <Route exact path={`${match.url}`} component={InformationUser} />
        <Route exact path={`${match.url}/booking`} component={BookingContent} />
      </Switch>
    </Layout>

  );
};
export default withRouter(UserPage);
