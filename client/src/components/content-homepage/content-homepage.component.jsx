import React from 'react';
//import {connect} from 'react-redux';
import './content-homepage.styles.scss';
import {
  Layout, Row, /* Col ,*/ Divider,
} from 'antd';
//import CardItem from '../card-item/card-item.component';
import CarouselHomePage from '../carousel-homepage/carousel-homepage.component';
//import { getCollectionStart } from '../../redux/shop/shop.action';

const { Content } = Layout;


const ContentHomePage = () => (
  <Layout style={{ padding: '0 24px 24px' }}>
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 600,
      }}
    >
      <Divider orientation="left"><h2>View Sale</h2></Divider>
      <CarouselHomePage />
      <Divider orientation="left"><h2>Best Sale</h2></Divider>
      <Row gutter={{
        xs: 8, sm: 16, md: 24, lg: 32,
      }}
      >
        {/* <Col xs={24} sm={12} md={8} lg={6} className="gutter-row">
          <CardItem />
        </Col> */}

      </Row>
    </Content>
  </Layout>
);

// const mapDispatchToProps = dispatch => ({
//   getCollectionStart : (nameEN) => dispatch(getCollectionStart(nameEN))
// })connect(null,mapDispatchToProps)

export default (ContentHomePage);
