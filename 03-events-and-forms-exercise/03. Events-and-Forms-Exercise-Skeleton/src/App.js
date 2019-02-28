import React, {Component} from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
            newGame: false,
            open: true
        }
    }

    registerUser(user) {
        // TODO: register a user and login
        let usernameToAdd = user.username
        console.log(user.username)
        this.setState({message: ''})
        if(usernameToAdd && usernameToAdd.trim().length < 3) {
            this.setState({message: 'Username must be at least 3 symbols!'})
            return;
        }
        fetch('http://localhost:9999/auth/signup', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(user), // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(body => {
            if(body.errors) {
                let err = this.state.message;
                body.errors.forEach(error => {
                    console.log(error)
                    err = err + ' ' + error.msg;
                })
                this.setState({message: err})
            } else {
                //Add new user to frond-end
                localStorage.setItem('username', body.username);
                localStorage.setItem('userId', body.userId);
                this.setState({
                    user: body.username,
                    message: 'New user signed up!'
                });

            }
        })
        .catch(er => {
            console.log('Er:',er)
            this.setState({message: er.message || er.TypeError})
        })
    }

    loginUser(user) {
        this.setState({message: ''})
        // TODO: login a user and set sessionStorage items username and token
        fetch('http://localhost:9999/auth/signin', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(user), // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(body => {
            if(!body.userId) {
                
                this.setState({message: 'Invalid credentials!'})
            } else {
                //Add new user to frond-end
                if(body.username && body.userId) {

                    localStorage.setItem('username', body.username);
                    localStorage.setItem('userId', body.userId);
                    this.setState({
                        user: body.username,
                        message: 'User logged in!'
                    });
                }
                

            }
        })
        .catch(er => {
            console.log('Er:',er)
            this.setState({message: er.message || er.TypeError})
        })
    }


    logout(event) {
        this.setState({
            user: null,
            message: 'Logged Out.'
        })
        localStorage.clear();
       // TODO: prevent the default state
       // TODO: delete the data from the sessionStorage
       // TODO: update the state (user: null)
    }

    componentWillMount() {
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)
        const currentUsername = (localStorage.getItem('username'));
        console.log(localStorage.getItem('username'));
        if(currentUsername) {
            this.setState({
                user: currentUsername,
                message: ''
            })

        }

       // TODO: fetch all the games
       fetch('http://localhost:9999/feed/games')
       .then(res => res.json())
       .then(data => this.setState({
           games: data.games
       }))
       .catch(er => console.log(er));
    }

    createGame(data) {
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
        fetch('http://localhost:9999/feed/game/create', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json"
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            })
            .then(res => res.json())
            .then(body => {
                if (body.errors) {
                    let err = '';
                    body.errors.forEach(error => {
                        console.log(error)
                        err = err + ' ' + error.msg;
                    })
                    this.setState({message: err})
                } else {
                    let currGames = this.state.games;
                    currGames.push(body.game)
                    this.setState({
                        games: currGames,
                        message: `Game "${body.game.title}" created. `
                    });
                    console.log(currGames)
                }
            })
            .catch(er => console.log(er))
    }

    switchForm() {
        // TODO: switch the value of the loginForm property
        this.setState({
            loginForm: !this.state.loginForm,
            message: ''
        })
    }

    refreshMessage(newMessage) {
        // TODO: switch the value of the loginForm property
        this.setState({
            message: newMessage
        })
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                    message={this.state.message}
                />
                <AppContent
                    message={this.state.message}
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    refreshMessage={this.refreshMessage.bind(this)}
                    user={this.state.user}
                    newGame={this.state.newGame}
                    loginForm={this.state.loginForm}
                />
                <AppFooter/>
            </main>
        )
    }
}

export default App;


