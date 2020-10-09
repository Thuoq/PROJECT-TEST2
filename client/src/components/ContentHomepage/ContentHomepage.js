import React from 'react';
import './ContentHomePage.scss';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Divider } from 'antd';
import CardItem from '../CardItem/CardItem';

import { BannerSecondary, BannerHeading } from '../../components/index';

const { Content } = Layout;

const ContentHomePage = ({ collections, match, history }) => (
  <Layout style={{ marginTop: '-2rem' }}>
    <Content className="site-layout-background">
      <BannerHeading />
      <Divider orientation="center" style={{ whiteSpace: 'normal' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: '600', color: '#000' }}>
          Popular Sales
        </h2>
        <p style={{ color: 'gray', fontWeight: '400' }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </Divider>
      <BannerSecondary />
      <Divider orientation="center" style={{ whiteSpace: 'normal' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: '600', color: '#000' }}>
          Best Sellers
        </h2>
        <p style={{ color: 'gray', fontWeight: '400' }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </Divider>
      <Row
        style={{
          marginRight: '0',
          marginLeft: '0',
        }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {collections.map((cartItem, idx) => (
          <Col xs={24} key={idx} sm={8} md={6} lg={3}>
            <CardItem
              key={idx}
              cartItem={cartItem}
              match={match}
              history={history}
            />
          </Col>
        ))}
      </Row>
    </Content>
  </Layout>
);
ContentHomePage.propTypes = {
  collections: PropTypes.array.isRequired,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default ContentHomePage;
