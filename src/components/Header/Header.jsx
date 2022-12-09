import React, { useState, useEffect } from 'react';

import BRLogo from '../Icons/Common/BRLogo';
import "./Header.scss";

const Header = () => {

  const [celsiusActive, setCelsiusActive] = useState(true);

  return (
    <div className="header">
      <div className="logo-container">
        <BRLogo />
        <div>
          Weather
        </div>
      </div>
      <div className="type-container">
        <button className={celsiusActive ? "active" : "deactive"} onClick={() => setCelsiusActive(true)}>F°</button>
        <button className={!celsiusActive ? "active" : "deactive"} onClick={() => setCelsiusActive(false)}>C°</button>
      </div>
    </div>
  );
};

export default Header;