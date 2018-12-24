import React from 'react';
import './Navigation.scss';

import Button from '../Button/Button';

const Navigation = ({
  buttons = [],
}) => (
  <nav className="navigation color-white">
    {buttons.map((button, index) =>
      <Button
        key={index}
        type={button.type}
        href={button.link}
        onClick={button.onClick}
        >
          {button.text}
      </Button>
    )}
  </nav>
);

export default Navigation;
