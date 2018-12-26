import React from 'react';
import './Badge.scss';

import classNames from 'classnames';


const Badge = ({
  content,
  className,
  children
}) => (
  <div className={classNames({
      badge: true,
      [className]: className? true : false,
    })}>
    <div className="badge__content">
      {content}
    </div>
    <div className="badge__wrapper">
      {children}
    </div>
  </div>
);

export default Badge;
