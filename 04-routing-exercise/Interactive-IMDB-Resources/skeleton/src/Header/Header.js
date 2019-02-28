import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            isCreated: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        localStorage.removeItem('message')
    }

    render() {
        let ifAdmin = (this.props.isAdmin) ? (<span><NavLink to="/movies/create" onClick={this.handleClick}>Create</NavLink></span>) : (null)
        return (
            <header>
            <NavLink to='/' className="logo">Interactive IMDB</NavLink>
            <div className="header-right">  
                    <NavLink to='/'>Home</NavLink>
                {this.props.userId !== null ? (<span>
                    <NavLink to='/'>Welcome, {this.props.user}!</NavLink>
                    {ifAdmin}
                    <NavLink to='/' onClick={this.props.logout}>Logout</NavLink>
                </span>) : (<span>
                    <NavLink to='/auth/register'>Register</NavLink>
                    <NavLink to='/auth/login'>Login</NavLink>
                </span>)}
               
            </div>
        </header>
    );
}

}
export default Header;
