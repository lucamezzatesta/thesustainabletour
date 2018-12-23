import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Map from '../../components/Map/Map';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Header />
        <Map />
      </div>
    );
  }

}

export default Home;
