import React from 'react';
import './Picture.scss';
import classNames from 'classnames';


const Picture = ({
  images = {},
  alt = '',
  aspectRatio = 1,
  disableAR = false,
  className,
  radius = 0,
  key,
}) => {

  let sources = []
  if (images.tablet) sources.push(<source media="(min-width: 465px)" srcSet={images.tablet} />);
  if (images.desktop) sources.push(<source media="(min-width: 650px)" srcSet={images.desktop} />);
  if (images.default || images) sources.push(<img srcSet={images.default || images} alt={alt}/>);

  let pictureClassNames = classNames({
    picture: true,
    [className]: className? true : false,
  })

  let style;
  if (disableAR) {
    style = {
      borderRadius: radius
    }
  } 
  else {
    style = {
      "--ar": aspectRatio, 
      borderRadius: radius
    }
  }

  return (
    <picture 
      className={pictureClassNames} 
      style={style}
      key={key || ''}
    >
      {sources}
    </picture>
  );
};

export default Picture;
