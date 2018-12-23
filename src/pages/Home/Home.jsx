import React, { Component } from 'react';
import './Home.scss';

import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Navigation from '../../components/Navigation/Navigation';

class Home extends Component {

  onContactUsClick = (e) => {
    console.log("contact us");
  }

  render() {
    return (
      <div className="home">
        <Header title="The Sustainable Tour" subtitle="north american edition"/>
        <Map />
        <Navigation links={
            [
              {
                type: "link",
                text: "about",
                link: "#nav-about"
              },
              {
                type: "link",
                text: "our journey",
                link: "#nav-journey"
              },
              {
                text: "contact us",
                onClick: this.onContactUsClick,
              }
            ]
          }/>
      </div>
    );
  }

}

export default Home;
