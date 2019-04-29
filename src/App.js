import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Waiting from './pages/Waiting/Waiting';

import firebase from 'firebase';

class App extends Component {
  // In case of multiple pages, install React-router and add pages here

  constructor(props) {
    super(props);
    this.db = null;

    this.state = {
      labels: {},
      slideshow: [],
    }
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtJaNFGXwG0tKHVX1BuschF82rK0K--Ek',
      authDomain: '"the-sustainable-tour.firebaseapp.com',
      databaseURL: "https://the-sustainable-tour.firebaseio.com",
      projectId: "the-sustainable-tour",
      storageBucket: "the-sustainable-tour.appspot.com",
      messagingSenderId: "364425331947"
    });

    this.db = firebase.database();
    this.db.ref('/years/2019/labels/en').once('value').then(s => this.setState({labels: s.val()}));
    this.db.ref('/years/2019/waitingSlideshow').once('value').then(s => this.setState({slideshow: Object.values(s.val())}));
  
  }

  render() {
    return <Waiting labels={this.state.labels} slideshow={this.state.slideshow}/>;
  }
}

export default App;
