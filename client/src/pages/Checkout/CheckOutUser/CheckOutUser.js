import React from 'react';

import { Col, Row, Input, Form } from 'antd';
import './CheckOutUser.scss';

import ListUserCart from './ListUserCart';
const CheckOutUser = () => (
  <section className="checkout-section spad">
    <div className="container">
      <Form action="#" className="checkout-form">
        <Row gutter={[48, 16]}>
          <Col span={12}>
            <h4>Biiling Details</h4>
            <Row gutter={[48, 16]}>
              <Col span={12}>
                <label htmlFor="fir">
                  First Name<span>*</span>
                </label>
                <Input type="text" id="fir" />
              </Col>
              <Col span={12}>
                <label htmlFor="last">
                  Last Name<span>*</span>
                </label>
                <Input type="text" id="last" />
              </Col>
              <Col span={24}>
                <label htmlFor="cun-name">Company Name</label>
                <Input type="text" id="cun-name" />
              </Col>
              <Col span={24}>
                <label htmlFor="cun">
                  Country<span>*</span>
                </label>
                <Input type="text" id="cun" />
              </Col>
              <Col span={24}>
                <label htmlFor="street">
                  Street Address<span>*</span>
                </label>
                <Input type="text" id="street" className="street-first" />
              </Col>
              <Col span={24}>
                <label htmlFor="zip">Postcode / ZIP (optional)</label>
                <Input type="text" id="zip" />
              </Col>
              <Col span={24}>
                <label htmlFor="town">
                  Town / City<span>*</span>
                </label>
                <Input type="text" id="town" />
              </Col>
              <Col span={12}>
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <Input type="text" id="email" />
              </Col>
              <Col span={12}>
                <label htmlFor="phone">
                  Phone<span>*</span>
                </label>
                <Input type="text" id="phone" />
              </Col>
            </Row>
          </Col>
          <ListUserCart />
        </Row>
      </Form>
    </div>
  </section>
);

export default CheckOutUser;
