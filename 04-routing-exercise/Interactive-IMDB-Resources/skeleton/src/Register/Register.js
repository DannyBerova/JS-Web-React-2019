import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
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
      <div className="Register">
          <h1>Register</h1>
          <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.registerUser(this.state);
                    
                }}>
          <label htmlFor="username">Username</label>
          <input type="text" onChange={this.handleChange} name="username" id="username" placeholder="Your username here"/>
          <label htmlFor="email">Email</label>
          <input type="email" onChange={this.handleChange}  name="email" id="email" placeholder="Yor email here"/>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={this.handleChange}  name="password" id="password" placeholder="******"/>
          <input type="submit"  value="REGISTER"/>
          </form>
      </div>
    );
  }
}

export default Register;
