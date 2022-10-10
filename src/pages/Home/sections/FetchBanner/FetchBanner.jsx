import React from 'react';

import './fetchBanner.scss';

const FetchBanner = ({ src, alt, title }) => {
  return (
    <div className="fetchBanner">
      <img src={src} alt={alt} />
      <h2>{title}</h2>
    </div>
  );
};

export default FetchBanner;
