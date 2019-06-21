import React, { Component, Fragment } from 'react';
import './Home.scss';

import {TweenMax, ScrollToPlugin, Power2} from 'gsap/all';
import ScrollMagic from 'scrollmagic';

import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Navigation from '../../components/Navigation/Navigation';
import Card from '../../components/Card/Card';
import Picture from '../../components/Picture/Picture';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

// Images
import luca from '../../assets/images/luca.jpg';
import gio from '../../assets/images/gio.jpg';
import mattia from '../../assets/images/mattia.jpg';

// eslint-disable-next-line
const plugins = [ScrollMagic, TweenMax, ScrollToPlugin];


class Home extends Component {

  constructor(props) {
    super(props);

    this.scrollController = new ScrollMagic.Controller();
    this.scrollController.scrollTo(target => {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: target,
          autokill: true
        },
        ease : Power2.easeInOut
      })
    });
  }

  smoothScrollTo = e => {
    let id = e.currentTarget.getAttribute("href");
    if (id) {
      e.preventDefault();
      this.scrollController.scrollTo(id);
    }
  }

  lineBreaker(text) {
    if (!text || typeof text !== "string") return "";

    return text.split('\n').map(i => <Fragment key={i}>{i}<br/></Fragment>)
  }

  render() {

    let labels = this.props.labels || {};

    return (
      <div className="home">
        <Header title="The Sustainable Tour" subtitle="north american edition"/>
        <Map />
        <Navigation buttons={
            [
              {
                type: "link",
                text: labels.navButton1 || "",
                link: "#nav-about",
                onClick: this.smoothScrollTo,
              },
              {
                type: "link",
                text: labels.navButton2 || "",
                link: "#nav-sponsor",
                onClick: this.smoothScrollTo,
              },
              {
                type: "link",
                text: labels.navButton3 || "",
                link: "mailto:info@thesustainabletour.com",
              }
            ]
          }/>
        <main className="container">
          <section className="row home__description">
            <div className="col-lg-7 col-xl-7">
              <h3 className="title home__description-title" id="nav-about">{this.lineBreaker(labels.motto)}</h3>
              <p className="home__description-text">{this.lineBreaker(labels.aboutText)}</p>
            </div>
            <div className="col home__legenda">
              <Card>
                <div className="home__legenda-card">
                  <Picture className="home__legenda-picture" images={gio} radius="200px"/>
                  <div className="home__legenda-content">
                    <span className="name">giovanni franco</span>
                    <span className="job">blogger</span>
                    <ul className="socials">
                      <Button iconLeft="instagram" background="clear" color="black" type="link" href='https://www.instagram.com/giovfranco'/>
                      <Button iconLeft="website" background="clear" color="black" type="link" href='https://giovfranco.com'/>
                    </ul>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="home__legenda-card">
                  <Picture className="home__legenda-picture" images={mattia} radius="200px"/>
                  <div className="home__legenda-content">
                    <span className="name">mattia albertin</span>
                    <span className="job">photographer</span>
                    <ul className="socials">
                      <Button iconLeft="instagram" background="clear" color="black" type="link" href='https://www.instagram.com/matti_albertin'/>
                    </ul>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="home__legenda-card">
                  <Picture className="home__legenda-picture" images={luca} radius="200px"/>
                  <div className="home__legenda-content">
                    <span className="name">luca mezzatesta</span>
                    <span className="job">videomaker</span>
                    <ul className="socials">
                      <Button iconLeft="instagram" background="clear" color="black" type="link" href='https://www.instagram.com/luca_mezzatesta'/>
                      <Button iconLeft="youtube" background="clear" color="black" type="link" href='https://www.youtube.com/channel/UCdFuGhRTglTHKk6vb0TEU9g'/>
                      <Button iconLeft="website" background="clear" color="black" type="link" href='https://www.lucamezzatesta.com/'/>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="home__supporters">
            <h3 className="title" id="nav-sponsor">{this.lineBreaker(labels.aboutTitle)}</h3>

            <div className="home__supporters-list">

            </div>

          </section>
        </main>
      <Footer/>
      </div>
    );
  }

}

export default Home;
