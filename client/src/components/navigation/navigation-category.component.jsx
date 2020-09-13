import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './navigation.category.scss';
import { BarsOutlined } from '@ant-design/icons';

const NavigationCategory = ({ location }) => (
  <div className="nav-item">
    <div
      className="container container-phone"
      style={{
        height: '7.05rem',
      }}
    >
      <div className="nav-depart">
        <div className="depart-btn">
          <BarsOutlined style={{ fontSize: '1.7rem' }} className="ti-menu" />
          <span>Popular Category</span>
          <ul className="depart-hover">
            {[
              'T shirt',
              'Crop top shirt',
              'Ship neck',
              'Bra',
              'Shirt',
              'Jacket',
            ].map((el, idx) => (
              <li key={idx}>
                <Link
                  to={{
                    pathname: '/shop',
                    search: `?nameEN=${el}&&page=1`,
                  }}
                >
                  {el}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="nav-menu mobile-menu animate__animated animate__backInRight">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ' '}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname.includes('shop') ? 'active' : ' '}>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap" />
    </div>
  </div>
);

export default withRouter(NavigationCategory);