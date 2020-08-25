import React from 'react';
import { Carousel } from 'antd';

const CarouselHomePage = () => (
  <Carousel autoplay>
    <div>
      <img
        style={{ width: '60vw', height: '40rem' }}
        height={400}
        src="https://i.postimg.cc/WzYb4yFc/victor-vorontsov-29-Rj8-Bfj-TU-unsplash.jpg"
        alt="2"
      />
    </div>
    <div>
      <img
        style={{ width: '60vw', height: '40rem' }}

        src="https://i.postimg.cc/W3jMmd9b/whereslugo-d-RFA8w-Fm-Uh-E-unsplash.jpg"
        alt="2"
      />
    </div>
    <div>
      <img
        style={{ width: '60vw', height: '40rem' }}

        src="https://i.postimg.cc/tT54KJ9T/jeremy-thomas-MPRXKHV-WWU-unsplash.jpg"
        alt="2"
      />
    </div>
    <div>
      <img
        style={{ width: '60vw', height: '40rem' }}

        src="https://i.postimg.cc/qR07DyVS/gwendal-cottin-3-IDSZXfc-Qbg-unsplash.jpg"
        alt="2"
      />
    </div>
  </Carousel>
);
export default CarouselHomePage;
