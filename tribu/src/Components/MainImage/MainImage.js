import React from 'react';

import '../../styles/styles.scss';

import img from '../../assets/images/Rome-Main.jpg';

function MainImage() {
  return (
    <div className="MainImage">
      <img src={img} className="MainImage-img" alt="Rome" />
      <div className="MainImage-content">
        <h2 className="MainImage-title">rome</h2>
      </div>
    </div>
  );
}

export default MainImage;
