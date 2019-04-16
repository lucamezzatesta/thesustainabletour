import React, { Component } from 'react';
import './Home.scss';

import {TweenMax, ScrollToPlugin, Power2} from 'gsap/all';
import ScrollMagic from 'scrollmagic';

import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Navigation from '../../components/Navigation/Navigation';
import Card from '../../components/Card/Card';
import Picture from '../../components/Picture/Picture';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';
import Modal from '../../components/Modal/Modal';

// DEBUG: Test
import luca from '../../assets/images/luca.jpg';

// eslint-disable-next-line
const plugins = [ScrollMagic, TweenMax, ScrollToPlugin];


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    }

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

  onContactUsClick = e => {
    console.log("contact us");
    this.setState({isModalOpen: true});
  }

  smoothScrollTo = e => {
    let id = e.currentTarget.getAttribute("href");
    if (id) {
      e.preventDefault();
      this.scrollController.scrollTo(id);
    }
  }

  render() {
    return (
      <div className="home">
        <Header title="The Sustainable Tour" subtitle="north american edition"/>
        <Map />
        <Navigation buttons={
            [
              {
                type: "link",
                text: "about",
                link: "#nav-about",
                onClick: this.smoothScrollTo,
              },
              {
                type: "link",
                text: "our journey",
                link: "#nav-journey",
                onClick: this.smoothScrollTo,
              },
              {
                text: "contact us",
                onClick: this.onContactUsClick,
              }
            ]
          }/>
        <main className="container">
          <section className="row home__description">
            <div className="col-lg-7 col-xl-8">
              <h3 className="title home__description-t" id="nav-about">Life is a journey,<br/>make it sustainable!</h3>
              <p className="home__description-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra ut augue. Integer quam nunc, consequat nec egestas ac, volutpat ac nisi. Sed consectetur dignissim dignissim. Donec pretium est sit amet ipsum fringilla feugiat. Aliquam erat volutpat. Maecenas scelerisque, orci sit amet cursus tincidunt, libero nisl eleifend tortor, vitae cursus risus mauris vitae nisi. Cras laoreet ultrices ligula eget tempus. Aenean metus purus, iaculis ut imperdiet eget, sodales et massa. Duis pellentesque nisl vel massa</p>
            </div>
            <div className="col home__legenda">
              <Card>
                <div className="home__legenda-card">
                  <Picture className="home__legenda-picture" images={luca} radius="200px"/>
                  <div className="home__legenda-content">
                    <span className="name">luca mezzatesta</span>
                    <span className="job">videomaker</span>
                    <ul className="socials">
                      <Button iconLeft="facebook" background="clear" color="black"/>
                      <Button iconLeft="instagram" background="clear" color="black"/>
                      <Button iconLeft="website" background="clear" color="black"/>
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
                      <Button iconLeft="facebook" background="clear" color="black"/>
                      <Button iconLeft="instagram" background="clear" color="black"/>
                      <Button iconLeft="website" background="clear" color="black"/>
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
                      <Button iconLeft="facebook" background="clear" color="black"/>
                      <Button iconLeft="instagram" background="clear" color="black"/>
                      <Button iconLeft="website" background="clear" color="black"/>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="home__feed">
            <h3 className="title" id="nav-journey">Join our adventure</h3>
            <div className="home__polaroid">
              <Badge className="home__polaroid-wrapper" content={
                  <Picture images={luca} radius="200px"/>
                }>
                <Card aspectRatio={7/9} flow="vertical">
                  <Picture images={luca} radius="20px" aspectRatio={1} />
                  <div className="home__polaroid-bottom">
                    <span className="date">15 AUG 2019</span>
                    <span className="geolocation">Alaska, USA</span>
                  </div>
                </Card>
              </Badge>
              <Badge className="home__polaroid-wrapper" content={
                  <Picture images={luca} radius="200px"/>
                }>
                <Card aspectRatio={7/9} flow="vertical">
                  <Picture images={luca} radius="20px" aspectRatio={1} />
                  <div className="home__polaroid-bottom">
                    <span className="date">15 AUG 2019</span>
                    <span className="geolocation">Alaska, USA</span>
                  </div>
                </Card>
              </Badge>
              <Badge className="home__polaroid-wrapper" content={
                  <Picture images={luca} radius="200px"/>
                }>
                <Card aspectRatio={7/9} flow="vertical">
                  <Picture images={luca} radius="20px" aspectRatio={1} />
                  <div className="home__polaroid-bottom">
                    <span className="date">15 AUG 2019</span>
                    <span className="geolocation">Alaska, USA</span>
                  </div>
                </Card>
              </Badge>
              <Badge className="home__polaroid-wrapper" content={
                  <Picture images={luca} radius="200px"/>
                }>
                <Card aspectRatio={7/9} flow="vertical">
                  <Picture images={luca} radius="20px" aspectRatio={1} />
                  <div className="home__polaroid-bottom">
                    <span className="date">15 AUG 2019</span>
                    <span className="geolocation">Alaska, USA</span>
                  </div>
                </Card>
              </Badge>
              <Badge className="home__polaroid-wrapper" content={
                  <Picture images={luca} radius="200px"/>
                }>
                <Card aspectRatio={7/9} flow="vertical">
                  <Picture images={luca} radius="20px" aspectRatio={1} />
                  <div className="home__polaroid-bottom">
                    <span className="date">15 AUG 2019</span>
                    <span className="geolocation">Alaska, USA</span>
                  </div>
                </Card>
              </Badge>
            </div>
          </section>
        </main>
      <Modal 
        show={this.state.isModalOpen}
        onClose={() => this.setState({isModalOpen:false}) }
      />
      </div>
    );
  }

}

export default Home;
