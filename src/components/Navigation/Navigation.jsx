import React from 'react';
import './Navigation.scss';

import Button from '../Button/Button';

const Navigation = ({
  links = [],
}) => (
  <nav className="navigation color-white">
    {getLinks(links)}
  </nav>
);

const getLinks = (links) => {
  let buttons = [];

  for (let button of links) {
    buttons.push(<Button type={button.type} href={button.link} onClick={button.onClick}>{button.text}</Button>);
  }

  return buttons;
}

export default Navigation;
