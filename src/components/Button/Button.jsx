import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({
  type = 'button',
  className,
  children,
  iconLeft,
  iconRight,
  onClick,
  background = 'green',
  color = 'white',
  href = '',
}) => {

  let buttonClass = classNames({
    button: true,
    [`bg-${background}`]: true,
    [`color-${color}`]: true,
    [className]: (className? true : false),
  })

  switch(type) {
    case 'button':
      return (
        <button className={buttonClass} onClick={onClick}>
          {iconLeft && <i className={`icon-left icon-${iconLeft}`}></i>}
          {children}
          {iconRight && <i className={`icon-right icon-${iconRight}`}></i>}
        </button>
      );
    case 'submit':
      return <input className={buttonClass} type="submit" value={children}/>
    case 'link':
      return (
        <a className={buttonClass} href={href}>
          {iconLeft && <i className={`icon-left icon-${iconLeft}`}></i>}
          {children}
          {iconRight && <i className={`icon-right icon-${iconRight}`}></i>}
        </a>
      );
    default:
      console.error("BUTTON COMPONENT: type", type, "is not supported.");
  }
}

export default Button;
