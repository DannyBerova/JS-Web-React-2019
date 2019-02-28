import React, { Component } from 'react';
import '../Login/Login.css';

class NoMatch extends Component {
  render() {
    return (
      <div className="login">
          <h2>No match for this route! Check for valid path!</h2>
      </div>
    );
  }
}

export default NoMatch;
