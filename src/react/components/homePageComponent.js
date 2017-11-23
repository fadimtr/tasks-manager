import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
