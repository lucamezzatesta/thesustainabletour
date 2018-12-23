import React from 'react';
import './Header.scss';

import Button from '../Button/Button';

const Header = ({
  title,
  subtitle,
}) => (
  <header className="header">
    <div className="header__center">
      {title && <h1 className="title">{title}</h1>}
      {subtitle && <h2 className="subtitle">{`-- ${subtitle} --`}</h2>}
    </div>
  </header>
);

export default Header;
