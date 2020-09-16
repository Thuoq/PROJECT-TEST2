import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { Col, Row, Form, Input } from 'antd';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <Row gutter={[48, 8]}>
        <Col flex={2}>
          <div className="footer-left">
            <div className="footer-logo">
              <Link to="/">
                <img src="https://i.postimg.cc/cH8BcTSc/logo.png" alt="" />
              </Link>
            </div>
            <ul>
              <li>Address: 60-49 Road 11378 Tran Phu</li>
              <li>Phone: +84 98.378.6614</li>
              <li>Email: example@gmail.com</li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com/hthuongh1939203">
                <i className="fa fa-facebook " />
              </a>
              <a href="https://www.instagram.com/?hl=vi">
                <i className="fa fa-instagram " />
              </a>
            </div>
          </div>
        </Col>
        <Col flex={2.5}>
          <div className="footer-widget">
            <h5>Information</h5>
            <ul>
              <li>
                <a href="/">About Us </a>
              </li>
              <li>
                <a href="/">Checkout </a>
              </li>
              <li>
                <a href="/">Contact </a>
              </li>
              <li>
                <a href="/">Service </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col flex={2} className="col-lg-2">
          <div className="footer-widget">
            <h5>My Account</h5>
            <ul>
              <li>
                <a href="/">My Account</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Shopping Cart</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col flex={3.5} className="col-lg-4">
          <div className="newslatter-item">
            <h5>Join Our Newsletter Now</h5>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <Form action="/" className="subscribe-form">
              <Input type="text" placeholder="Enter Your Mail" />
              <button type="button">Subscribe</button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
    <div className="copyright-reserved">
      <div className="container">
        <Row>
          <Col>
            <div className="copyright-text">
              Copyright © All rights reserved | This template is made with
              cownut.design.co &nbsp; &nbsp;
            </div>
            <div className="payment-pic">
              <img src="img/payment-method.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </footer>
);

export default Footer;
