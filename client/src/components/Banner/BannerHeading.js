import React from 'react';
import PropTypes, { func, string } from 'prop-types';
import { Col, Row, Button } from 'antd';
import './BannerHeading.scss';
import { withRouter } from 'react-router-dom';

const BannerHeading = ({ match, history }) => (
  <section className="banner-area" id="home">
    <Row className="img-fluid">
      <Col span={12}>
        <div />
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
        <Button
          type="primary"
          onClick={() => history.push(`${match.url}shop`)}
          size="large"
        >
          Purchase Now
        </Button>
      </Col>
    </Row>
  </section>
);

BannerHeading.propTypes = {
  match: PropTypes.shape({
    url: string.isRequired,
  }),
  history: PropTypes.shape({
    push: func.isRequired,
  }),
};

export default withRouter(BannerHeading);
