import React, { Component } from 'react';
import './RegisterForm.css'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state={ hasError: false}

        this.handleClickFunc = this.handleClickFunc.bind(this);
    }

    handleClickFunc() {
        this.setState(({hasError}) => ({
            hasError: true
          }));
    }
    render() {
        if (this.state.hasError) {
            // Simulate a JS error
            throw new Error('I crashed!');
          }
        return ( 
            <div>
                <header><span className="title">Register</span></header>
                <form onSubmit={(event)=>this.handleClickFunc(event)}>
                    Username:
                    <input type="text"/><br/>
                    Email:
                    <input type="text"/><br/>
                    Password:
                    <input type="password"/><br/>
                    Repeat Password:
                    <input type="password"/><br/>
                    <input type="submit" value="Register"/>
                    <button style={{background: "yellow"}} onClick={this.handleClickFunc}>Test error</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;