import React from 'react';
import './login.css';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            
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
                    // TODO: prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                    event.preventDefault();
                    this.props.loginUser(this.state);

                }}>
                    <label>Username</label>
                    <input type="text" onChange={this.handleChange} name="username" id="usernameReg"/>
                    
                    <label>Password</label>
                    <input type="password"  onChange={this.handleChange} name="password" id="passwordReg"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LogInForm;
