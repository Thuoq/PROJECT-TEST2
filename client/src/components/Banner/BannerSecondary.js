import React from 'react';
import { Col, Row } from 'antd';
import './BannerSecondary.scss';

const Banner = () => (
  <div className="banner-section spad" style={{ width: '100%', margin: 0 }}>
    <Row
      gutter={[
        {
          xs: 16,
          sm: 16,
          md: 48,
          lg: 32,
        },
        {
          xs: 16,
          sm: 16,
          md: 48,
          lg: 32,
        },
      ]}
    >
      <Col sm={24} md={8} lg={8}>
        <div className="single-banner">
          <img src="https://i.postimg.cc/gkVNKX1Q/image1.jpg" alt="" />
          <div className="inner-text">
            <h4>Clothings</h4>
          </div>
        </div>
      </Col>
      <Col sm={24} md={8} lg={8}>
        <div className="single-banner">
          <img src="https://i.postimg.cc/P5qY8CHm/image2.jpg" alt="" />
          <div className="inner-text">
            <h4>Housewares</h4>
          </div>
        </div>
      </Col>
      <Col sm={24} md={8} lg={8}>
        <div className="single-banner">
          <img src="https://i.postimg.cc/zB9YTb43/image4.jpg" alt="" />
          <div className="inner-text">
            <h4>Books</h4>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Banner;
