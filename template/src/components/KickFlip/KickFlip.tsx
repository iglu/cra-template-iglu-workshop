import React from 'react';

import './KickFlip.css';

const KickFlip = () => {
  return (
    <div className={BEM()}>
      <div className="kick-flip__inner">
        <div className="kick-flip__front">
          <span>Click here</span>
        </div>
        <div className="kick-flip__back">Click here</div>
      </div>
    </div>
  );

  function BEM() {
    const classArray = ['kick-flip'];

    return classArray.join(' ');
  }
};

export default KickFlip;
