import React from 'react';
import './DescriptionTableCard.scss';
const DescriptionTableCard = ({ productDetail }) => (
  <div className="specification-table">
    <div className="single-row">
      <span>Name</span>
      <span>{productDetail.nameEN}</span>
    </div>
    <div className="single-row">
      <span>Price VND</span>
      <span>{productDetail.priceVN}</span>
    </div>
    <div className="single-row">
      <span>Price USD</span>
      <span>{productDetail.priceUSD}</span>
    </div>

    <div className="single-row">
      <span>Weight</span>
      <span>{productDetail.weight} KG</span>
    </div>

    <div className="single-row">
      <span>Origin</span>
      <span>{productDetail.origin}</span>
    </div>
    <div className="single-row">
      <span>Item Factory Country:</span>
      <span>CN</span>
    </div>
  </div>
);

export default DescriptionTableCard;
