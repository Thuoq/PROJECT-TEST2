import React from 'react';

import { Col, Row, Button } from 'antd';
import './BannerHeading.scss';

const BannerHeading = () => (
  <section className="banner-area" id="home">
    <Row>
      <Col span={12}>
        <img
          className="img-fluid"
          style={{ width: '100vw ' }}
          src="https://i.postimg.cc/gjxtGnNc/6.jpg"
          alt="#"
        />
      </Col>
      <Col
        span={12}
        className="banner-content animate__animated animate__backInDown"
      >
        <h1 className="title-top">
          <span> Express</span> 75%Off
        </h1>
        <h1 className="text-uppercase">
          It’s Happening <br />
          this Season!
        </h1>
        <Button type="primary" size="large">
          {' '}
          Purchase Now
        </Button>
      </Col>
    </Row>
  </section>
);

export default BannerHeading;
