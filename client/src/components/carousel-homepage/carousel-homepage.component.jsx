import React from 'react';
import { Carousel } from 'antd';



const CarouselHomePage = ({collections}) => {
  return (
  <Carousel autoplay>
    {
      collections.map((collection,idx) => (
        <div key={idx}>
            <img style={{ width: '60vw', height: '40rem' }}
            height={400} 
            key={idx}
            src={collection.photoURL}
            alt="Product bestSale"
            />
        </div>
      ))
    }
  </Carousel>
)};




export default (CarouselHomePage);
