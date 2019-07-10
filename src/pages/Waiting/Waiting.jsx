import React, { Component } from 'react';
import './Waiting.scss';

import Modal from '../../components/Modal/Modal';
import Flipdown from '../../components/Flipdown/Flipdown.jsx';
import Button from '../../components/Button/Button';

import Slider from "react-slick";

export default class Waiting extends Component {

  render() {

    let settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrow: false,
      fade: true,
    }

    let {labels, slideshow} = this.props;

    let slides = [];
    slideshow.forEach( (e, i) => slides.push(<img src={e} key={i}></img>) )

    return (
      <div>

        <div className="waiting__background">
          <Slider {...settings}>
            {slides}
          </Slider>
        </div>
        
        <Modal show={true} showClose={false}>
          <div className="waiting__wrapper">
            <h1 className="title">{labels.title || 'The Sustainable Tour'}</h1>
            <h2 className="subtitle">{labels.subtitle || "-- NORTH AMERICAN EDITION --"}</h2>
            <Flipdown number={labels.departureDate || 1561334400}/>
            <span className="title waiting__days color-black;">{labels.daysBeforeTheAdventure || "days before the adventure"}</span>

            <span className="subtitle waiting__meantime">{labels.inTheMeantime || "in the meantime:"}</span>
            <Button 
              className="waiting__button"
              type="link"
              href={labels.discoverMoreHref || "#"}
            >
              {labels.discoverMore || "DISCOVER MORE"}
            </Button>
            <Button 
              className="waiting__button"
              type="link"
              href={labels.contactUsHref || "#"}
            >
              {labels.contactUs || "CONTACT US"}
            </Button>
          </div>
        </Modal>

      </div>
    )
  }
}
