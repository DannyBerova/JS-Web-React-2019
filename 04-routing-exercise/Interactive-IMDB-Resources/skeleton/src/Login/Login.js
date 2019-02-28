import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: null,
        password: null,
        email: null
    }

    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
      [event.target.name]: event.target.value
  })
}

render() {
  return (
    <div className="Login">
        <h1>Login</h1>
        <form onSubmit={(event) => {
                  event.preventDefault();
                  this.props.loginUser(this.state);
              }}>
        <label htmlFor="username">Username</label>
        <input type="text" onChange={this.handleChange} name="username" id="username" placeholder="Your username here"/>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={this.handleChange}  name="password" id="password" placeholder="******"/>
        <input type="submit"  value="LOGIN"/>
        </form>
    </div>
    );
  }
}

export default Login;
