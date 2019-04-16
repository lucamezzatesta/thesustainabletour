import React from 'react';
import './Picture.scss';
import classNames from 'classnames';


const Picture = ({
  images = {},
  alt = '',
  aspectRatio = 1,
  className,
  radius = 0,
}) => {

  let sources = []
  if (images.tablet) sources.push(<source media="(min-width: 465px)" srcSet={images.tablet} />);
  if (images.desktop) sources.push(<source media="(min-width: 650px)" srcSet={images.desktop} />);
  if (images.default || images) sources.push(<img srcSet={images.default || images} alt={alt}/>);

  let pictureClassNames = classNames({
    picture: true,
    [className]: className? true : false,
  })

  return (
    <picture className={pictureClassNames} style={{"--ar": aspectRatio, borderRadius: radius}}>
      {sources}
    </picture>
  );
};

export default Picture;
