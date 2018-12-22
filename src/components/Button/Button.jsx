import React from 'react';
import './Button.scss';

const Button = ({
  type = 'button',
  children,
  iconLeft,
  iconRight,
  onClick,
  background,
  color,
  href = '',
}) => {

  switch(type) {
    case 'button':
      return (
        <button onClick={onClick}>
          {iconLeft && <i className={`icon icon-${iconLeft}`}></i>}
          {children}
          {iconRight && <i className={`icon icon-${iconRight}`}></i>}
        </button>
      );
    case 'submit':
      return <input type="submit" value={children}/>
    case 'link':
      return (
        <a href={href}>
          {iconLeft && <i className={`icon icon-${iconLeft}`}></i>}
          {children}
          {iconRight && <i className={`icon icon-${iconRight}`}></i>}
        </a>
      );
    default:
      console.error("BUTTON COMPONENT: type", type, "is not supported.");
  }
}

export default Button;
