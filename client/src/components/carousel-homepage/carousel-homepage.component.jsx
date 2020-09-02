import React from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'antd';

const CarouselHomePage = ({ collections }) => (
  <Carousel autoplay>
    {
      collections.map((collection, idx) => (
        <div key={idx}>
          <img
            style={{ width: '60vw', height: '40rem' }}
            height={400}
            key={idx}
            src={collection.photoURL}
            alt="Product bestSale"
          />
        </div>
      ))
    }
  </Carousel>
);

CarouselHomePage.propTypes = {
  collections: PropTypes.array.isRequired,

};

export default (CarouselHomePage);
