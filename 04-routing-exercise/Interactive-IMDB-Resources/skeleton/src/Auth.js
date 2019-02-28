import React, {Component} from 'react';
import {Redirect, Route } from 'react-router-dom';
import Register from './Register/Register'
import Login from './Login/Login'

class Auth extends Component {
    
    render() {
      return <div>
        <Route exact path={`${this.props.match.path}/login`} 
            render={(props) => (this.props.userId !== null ? (<Redirect to='/'/>) : (<Login {...props} loginUser={this.props.loginUser}/>))}
        />
        <Route exact path={`${this.props.match.path}/register` } 
            render={(props) => (this.props.userId !== null ? (<Redirect to='/'/>) : (<Register {...props} registerUser={this.props.registerUser}/>))}
        />
      </div>
    }
  }

  export default Auth;