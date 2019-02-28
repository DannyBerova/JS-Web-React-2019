import React, { Component, Fragment, Suspense, lazy} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

//import NoMatch from './NoMatch/NoMatch';
import './App.css';
const Home = lazy(() => import('./Home/Home'));
const Create = lazy(() => import('./Create/Create'));
const Auth = lazy(() => import('./Auth'));
const Header = lazy(() => import('./Header/Header'));
const NoMatch = lazy(() => import('./NoMatch/NoMatch'));

class App extends Component {
  constructor(props) {
    super(props) 
    this.state={
      isAdmin: localStorage.getItem('isAdmin') || false,
      isLoggedIn: false,
      user: localStorage.getItem('username') || null,
      userId: localStorage.getItem('userId') || null,
      hasFetched: false,
      movies: [],
      message: ''
    }

    this.logout = this.logout.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  componentDidMount(prevProps, prevState) {
    fetch('http://localhost:9999/feed/movies')
     .then(res => res.json())
     .then(data => {
        if(data.movies) {
          this.setState({
            movies: data.movies
            })
          }
       })
     .catch(er => console.log(er));

      localStorage.removeItem('message')
     if(localStorage.getItem('userId')) {
       this.setState({
         user: localStorage.getItem('username'),
         userId: localStorage.getItem('userId'),
         isLoggedIn: true,
         isAdmin: Boolean(localStorage.getItem('isAdmin')),
         message: '',
        })
      }
  }

  registerUser(user) {
    // TODO: register a user and login
    let usernameToAdd = user.username
    this.setState({message: ''})
    if(usernameToAdd && usernameToAdd.trim().length < 3) {
        this.setState({message: 'Username must be at least 3 symbols!'})
        toast.error( 'Username must be at least 3 symbols!');
        return;
    }
    fetch('http://localhost:9999/auth/signup', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
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
            toast.error(err);
        } else {
            if(user) {
                this.setState((prevState, props) => ({
                  user: body.username,
                  userId: body.userId,
                  isLoggedIn: true,
                  isAdmin: body.isAdmin,
                  message: body.message
            }));
              localStorage.setItem('isAdmin', body.isAdmin);
              localStorage.setItem('username', body.username);
              localStorage.setItem('userId', body.userId);
              toast.success(<h4>{this.state.message}</h4>);
          }
        }
    })
    .catch(er => {
      console.log(er)
      toast.error(<h4>{er.message || er.TypeError}</h4>);
        this.setState({message: er.message || er.TypeError})
    })
}

loginUser(user) {
  this.setState({message: ''})
  fetch('http://localhost:9999/auth/signin', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
  .then(res => res.json())
  .then(body => {
      if(!body.userId) {
          this.setState({message: 'Invalid credentials!'})
          toast.error(this.state.message);
      } else {
          //Add new user to frond-end
          if(body.username && body.userId) {
            this.setState((prevState, props) => ({
              user: body.username,
              userId: body.userId,
              isLoggedIn: true,
              isAdmin: body.isAdmin,
              message: body.message
            }));
              localStorage.setItem('isAdmin', body.isAdmin);
              localStorage.setItem('username', body.username);
              localStorage.setItem('userId', body.userId);
              toast.success(<h4>{this.state.message}</h4>);
          }
      }
  })
  .catch(er => {
    console.log(er)
      this.setState({message: er.message || er.TypeError})
  })
}

  logout() {
    this.setState({
      isAdmin: false,
      isLoggedIn: false,
      user: null,
      userId: null,
      isFetched: false,
      message: 'Logged Out!'
    })
    localStorage.clear()
    toast.success('Logged Out!');
  }

  createMovie(movie) {
    this.setState({message: ''})
    localStorage.removeItem('message')
    localStorage.setItem('message', '');

    if(movie) {
    fetch('http://localhost:9999/feed/movie/create', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(movie), 
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
        toast.error(err);
        console.log('there')
        return;
      } else {
        if(movie && this.state.message === '' && body.movie) {
          let currMovies = this.state.movies;
          currMovies.push(body.movie)
          localStorage.setItem('message', `Movie "${body.movie.title}" created.`);
          this.setState({
                movies: currMovies,
                message: `Movie "${body.movie.title}" created.`,
                isAdmin: true
              });
              toast.success( localStorage.getItem('message'));
            }
          }
        })

        .catch(er => {
          console.log(er)
          toast.error(er)
        this.setState({message: er.message || er.TypeError})
    })
  }
}

  render() {
    return (
      <div className="App">
         <BrowserRouter>
         <Suspense fallback={<h1 style={{background: "yellow"}}>Loading...</h1>}>
            <Fragment>
              <Header  {...this.state} logout={this.logout} />
              <Switch>
                  <Route exact path='/' render={(props) => <Home 
                          {...props} 
                          {...this.state}  
                          setHomePage={this.setHomePage}/>} />
                  <Route path='/auth' 
                        render={(props) => <Auth 
                          {...props} 
                          {...this.state}  
                          loginUser={this.loginUser}
                          registerUser={this.registerUser}/>} />
                  <Route exact path='/movies/create' 
                          render={(props) => 
                            (localStorage.getItem('message') !== null && localStorage.getItem('message').endsWith('created.')
                            ) ? (<Redirect to="/"/>
                            ) : (<Create {...props} {...this.state} createMovie={this.createMovie}/>)}
                      />
                  <Route path='*' render={() => <NoMatch/>}/>
              </Switch>
              <ToastContainer 
                  position="bottom-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  rtl={false}
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover/>
            </Fragment>
            </Suspense>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
