import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {db} from '../../services/firebase';

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

  constructor() {
    super();

    this.state = {
      geoloc: [],
      map: null,
      maps: null,
    }
  }

  componentDidMount() {
    db.ref('/years/2019/geoloc').once('value').then(s => this.setState({geoloc: Object.values(s.val())}));
  }

  handleApiLoaded = (map, maps) => {

    this.setState({
      map,
      maps
    });

    map.setOptions({
      disableDefaultUI: true,
    });
  }

  drawPins = (geoloc, map, maps) => {

    // Compute coordinates
    let coordinates = [];
    if (geoloc) {
      coordinates = geoloc.map(e => { return {lat: e.lat, lng: e.lng} })
    }

    // Draw polyline
    if (map && maps) {
      new maps.Polyline({
        path: coordinates,
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

    // Draw pins
    let pins = [];
    if (coordinates) {
      coordinates.forEach((e, index) => {
        if (index === coordinates.length - 1) {
          pins.push(<div key={index} className="map__pin--last" lat={e.lat} lng={e.lng} text="A"></div>)
        }
        else {
          pins.push(<div key={index} className="map__pin" lat={e.lat} lng={e.lng} text="A"></div>)
        }
      });
    }
    return pins;
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
            {this.drawPins(this.state.geoloc, this.state.map, this.state.maps)}
        </GoogleMapReact>
      </div>
    );
  }

}

export default Map;
