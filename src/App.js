import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Waiting from './pages/Waiting/Waiting';
import Tracker from './pages/Tracker/Tracker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase, { auth, provider, db } from './services/firebase';

class App extends Component {
  // In case of multiple pages, install React-router and add pages here

  constructor(props) {
    super(props);

    this.state = {
      labels: {},
      slideshow: [],
    }
  }

  componentDidMount() {

    db.ref('/years/2019/labels/en').once('value').then(s => this.setState({labels: s.val()}));
    db.ref('/years/2019/waitingSlideshow').once('value').then(s => this.setState({slideshow: Object.values(s.val())}));
  }

  render() {

    // return <Waiting labels={this.state.labels} slideshow={this.state.slideshow}/>;
    // return <Home />
    return (
      <Router>
        <Switch>
          <Route exact path='/tracker' component={Tracker} />
          <Route component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
