import React from 'react';

import './fetchBanner.scss';

const FetchBanner = ({ src, alt, title }) => {
  return (
    <div className="fetchBanner">
      <img src={src} alt={alt} />
      <p>{title}</p>
    </div>
  );
};

export default FetchBanner;
