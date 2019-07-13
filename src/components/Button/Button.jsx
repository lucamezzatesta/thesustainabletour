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
  target = '_blank'
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
          {children && <span className="button__content">{children}</span>}
          {iconRight && <i className={`icon-right icon-${iconRight}`}></i>}
        </button>
      );
    case 'submit':
      return (
        <input className={buttonClass} type="submit" value={children} onClick={onClick}/>
      );
    case 'link':
      return (
        <a 
          className={buttonClass} 
          href={href} 
          onClick={onClick}
          target={target}
        >
          {iconLeft && <i className={`icon-left icon-${iconLeft}`}></i>}
          {children && <span className="button__content">{children}</span>}
          {iconRight && <i className={`icon-right icon-${iconRight}`}></i>}
        </a>
      );
    default:
      console.error("BUTTON COMPONENT: type", type, "is not supported.");
  }
}

export default Button;
