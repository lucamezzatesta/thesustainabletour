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
    });

    // TODO: Rendere dinamiche queste coordinate
    var flightPlanCoordinates = [
      {lat: 45.8415582, lng: -108.0177694},
      {lat: 60.8415582, lng: -140.0177694},
    ];
    var flightPath = new maps.Polyline({
      path: flightPlanCoordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      icons: [
        {
          icon: {path: maps.SymbolPath.FORWARD_CLOSED_ARROW},
          offset: '50%'
        }
      ],
      map: map,
    });
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
          <div key={0} className="map__pin" lat={45.8415582} lng={-108.0177694} text="A"></div>
          <div key={1} className="map__pin--last" lat={60.8415582} lng={-140.0177694} text="A"></div>
        </GoogleMapReact>
      </div>
    );
  }

}

export default Map;
