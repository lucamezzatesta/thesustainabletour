import React, { Component } from 'react';

import Button from '../../components/Button/Button';

class Home extends Component {

  render() {
    return (
      <div>
        <h1 className="title">The Sustainable Tour</h1>
        <Button iconLeft="facebook">ABOUT</Button>
        <Button type="link" iconLeft="facebook" href="#" background="clear" color="black"/>
      </div>
    );
  }

}

export default Home;
