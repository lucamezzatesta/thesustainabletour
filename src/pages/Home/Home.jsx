import React, { Component } from 'react';
import './Home.scss';

import {TweenMax, ScrollToPlugin, Power2} from 'gsap/all';
import ScrollMagic from 'scrollmagic';

import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Navigation from '../../components/Navigation/Navigation';
import Card from '../../components/Card/Card';

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

  onContactUsClick = e => {
    console.log("contact us");
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
          <section className="row">
            <div className="col-lg">
              <h3 className="title" id="nav-about">Life is a journey,<br/>make it sustainable!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra ut augue. Integer quam nunc, consequat nec egestas ac, volutpat ac nisi. Sed consectetur dignissim dignissim. Donec pretium est sit amet ipsum fringilla feugiat. Aliquam erat volutpat. Maecenas scelerisque, orci sit amet cursus tincidunt, libero nisl eleifend tortor, vitae cursus risus mauris vitae nisi. Cras laoreet ultrices ligula eget tempus. Aenean metus purus, iaculis ut imperdiet eget, sodales et massa. Duis pellentesque nisl vel massa</p>
            </div>
            <div className="col-lg home__legenda">
              <Card className="home__legenda-card">
                <span>hello</span>
                <p>second element</p>
              </Card>
              <Card className="home__legenda-card">
                <span>hello</span>
                <p>second element</p>
              </Card>
              <Card className="home__legenda-card">
                <span>hello</span>
                <p>second element</p>
              </Card>
            </div>
          </section>

          <section>
            <h3 className="title" id="nav-journey">Join our adventure</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra ut augue. Integer quam nunc, consequat nec egestas ac, volutpat ac nisi. Sed consectetur dignissim dignissim. Donec pretium est sit amet ipsum fringilla feugiat. Aliquam erat volutpat. Maecenas scelerisque, orci sit amet cursus tincidunt, libero nisl eleifend tortor, vitae cursus risus mauris vitae nisi. Cras laoreet ultrices ligula eget tempus. Aenean metus purus, iaculis ut imperdiet eget, sodales et massa. Duis pellentesque nisl vel massa</p>

          </section>
        </main>
      </div>
    );
  }

}

export default Home;
