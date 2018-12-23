import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.scss';

const googleMapsKey = {
  key: "AIzaSyBtJaNFGXwG0tKHVX1BuschF82rK0K--Ek",
};

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 45.8415582,
      lng: -108.0177694
    },
    zoom: 1,
  };

  handleApiLoaded = (map, maps) => {
    map.setOptions({
      disableDefaultUI: true,
    })
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={googleMapsKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          >
        </GoogleMapReact>
      </div>
    );
  }

}

export default Map;
