import React from 'react';
import {Col , Row} from 'antd';
import "./BannerSecondary.styles.scss";
const Banner = () => (
    <div className="banner-section spad" style={{width:'100%',margin:0}} >    
      <div className="container">
        
      <Row gutter={[{ xs: 16, sm: 16, md: 48, lg: 32 },{ xs: 16, sm: 16, md: 48, lg: 32 }]} >
        <Col sm={24} md={8} lg = {8}>
          <div className="single-banner">
            <img src="img/banner-1.jpg" alt="" />
            <div className="inner-text">
              <h4>Men’s</h4>
            </div>
          </div>
        </Col>
        <Col   sm={24} md={8} lg = {8} >
          <div className="single-banner">
            <img src="img/banner-2.jpg" alt="" />
            <div className="inner-text">
              <h4>Women’s</h4>
            </div>
          </div>
        </Col>
        <Col   sm={24} md={8} lg = {8} >
          <div className="single-banner">
            <img src="img/banner-3.jpg" alt="" />
            <div className="inner-text">
              <h4>Kid’s</h4>
            </div>
          </div>
        </Col>
      </Row>
    </div> 
  </div>
)

export default Banner;