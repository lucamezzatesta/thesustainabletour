import React from 'react';
import classNames from 'classnames';
import './Card.scss';

const Card = ({
  children,
  background = "grey",
  color = "black",
  className,
  aspectRatio = 7/3,
  flow = 'horizontal',
  onClick,
}) => {

  let cardClassName = classNames({
    card: true,
    [className]: className? true : false,
    [`bg-${background}`]: true,
    [`color-${color}`]: true,
    [flow]: true,
  });

  return (
    <div className={cardClassName} style={{"--ar":aspectRatio}} onClick={onClick}>
      <div className="card__content">
        {children}
      </div>
    </div>
  );
}

export default Card;
