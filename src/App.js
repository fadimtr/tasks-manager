import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import PrivateRoute from './route/privateRouteComponent';
import LoginPage from './react/components/login/loginPageComponent';
import HomePage from './react/components/homePageComponent';
import Portal from './react/components/portalComponent';
require('./styles/app.scss');

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <PrivateRoute path="/protected" Component={Portal}/>
        </div>
      </Router>
    );
  }
}

export default App;
