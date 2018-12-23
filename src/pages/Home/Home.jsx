import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import Map from '../../components/Map/Map';

class Home extends Component {

  render() {
    return (
      <div>
        <h1 className="title">The Sustainable Tour</h1>
        <Map />
        <Button iconLeft="facebook">ABOUT</Button>
        <Button type="link" iconLeft="facebook" href="#" background="clear" color="black"/>
        <Button type="submit" />
      </div>
    );
  }

}

export default Home;
