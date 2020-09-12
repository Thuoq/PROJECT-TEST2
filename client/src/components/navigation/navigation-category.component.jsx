import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './navigation.category.scss';
import {BarsOutlined  } from '@ant-design/icons';
//import {Layout} from 'antd';

const NavigationCategory = ({location}) => {
  
  
  
  return(
    <div className="nav-item" >
        <div className="container container-phone" style={{
          height: '7.05rem'
        }}>
          <div className="nav-depart">
            <div className="depart-btn">
              <BarsOutlined style={{fontSize:'1.7rem'}} className="ti-menu" />
              <span >All Category</span>
              <ul className="depart-hover">
                <li className="active"><Link to="/">Women’s Clothing</Link></li>
                <li><Link to="/">Men’s Clothing</Link></li>
                <li><Link to="/">Underwear</Link></li>
                <li><Link to="/">Kid's Clothing</Link></li>
                <li><Link to="/">Brand Fashion</Link></li>
                <li><Link to="/">Accessories/Shoes</Link></li>
                <li><Link to="/">Luxury Brands</Link></li>
                <li><Link to="/">Brand Outdoor Apparel</Link></li>
              </ul>
            </div>
          </div>
          <nav className="nav-menu mobile-menu animate__animated animate__backInRight">
            <ul>
              <li className={location.pathname === '/' ? "active" : " "}><Link to="/">Home</Link></li>
              <li className={location.pathname.includes("shop")   ? "active" : " "}><Link to="/shop">Shop</Link></li>
              
              <li><Link to="/">Contact Us</Link></li>
             
            </ul>
          </nav>
          <div id="mobile-menu-wrap" />
        </div>
      </div>
)}

export default withRouter(NavigationCategory);