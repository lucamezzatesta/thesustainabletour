import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Waiting from './pages/Waiting/Waiting';
import Tracker from './pages/Tracker/Tracker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { auth, provider, db } from './services/firebase';

class App extends Component {
  // In case of multiple pages, install React-router and add pages here

  constructor(props) {
    super(props);

    this.state = {
      labels: {},
      slideshow: [],
      user: null,
      admins: [],
    }
  }

  componentDidMount() {
    db.ref('/years/2019/labels/en').once('value').then(s => this.setState({labels: s.val()}));
    db.ref('/years/2019/waitingSlideshow').once('value').then(s => this.setState({slideshow: Object.values(s.val())}));
    db.ref('/years/2019/admins').once('value').then(s => this.setState({admins: Object.values(s.val())}));

    auth.onAuthStateChanged((user) => {
      if (user) {

        let isAdmin = false;
        if (this.state.admins.includes(user.email)) isAdmin = true;

        this.setState({
          user: {
            username: user.displayName,
            email: user.email,
            isAdmin,
          } 
        });
      
      }
    });
  }

  login = () => {
    auth.signInWithPopup(provider) 
        .then((result) => {

          const user = result.user;
          let isAdmin = false;
          if (this.state.admins.includes(user.email)) isAdmin = true;
  
          this.setState({
            user: {
              username: user.displayName,
              email: user.email,
              isAdmin,
            } 
          });
    });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
        });
      });
  }

  render() {

    // return <Waiting labels={this.state.labels} slideshow={this.state.slideshow}/>;
    // return <Home />

    return (
      <Router>
        <Switch>
          <Route exact path='/tracker' render={ () => <Tracker login={this.login} logout={this.logout} user={this.state.user} />} />
          <Route render={() => <Home labels={this.state.labels} /> } />
        </Switch>
      </Router>
    )
  }
}

export default App;
