import React from 'react';

import { Layout, Divider } from 'antd';
import './InformationUser.scss';

//import AddAddressUser from './AddAddressUser';
import FormUser from './FormUser';

const { Content } = Layout;

const InformationUser = () => (
  <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
    <Content
      style={{
        padding: '2.4rem',
        margin: 0,
        minHeight: 600,
      }}
    >
      <Divider>
        <h2>Your Informations</h2>
      </Divider>
      <div className="informationUser-container">
        <FormUser />
        {/* <AddAddressUser /> */}
      </div>
    </Content>
  </Layout>
);

export default InformationUser;
