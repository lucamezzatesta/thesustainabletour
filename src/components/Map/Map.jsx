import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.scss';

const googleMapsKey = {
  key: "AIzaSyA8X_DI2EJ0P6MZc2ubkznP8qvObNF4Bfk",
  zoomControl: false,
};

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={googleMapsKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}

          >
        </GoogleMapReact>
      </div>
    );
  }

}

export default Map;
