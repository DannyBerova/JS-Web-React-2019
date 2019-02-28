import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {  toast } from 'react-toastify';
import './Create.css';

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      storyLine: null,
      trailerUrl: null,
      poster: null
    }
    
    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}
  
  render() {
    const isAdmin = this.props.isAdmin;
    let renderIfAdmin = (
    <div className="Create">
      <h1>Create Movie</h1>
      <form onSubmit={async (event) => {
                    event.preventDefault();
                    if(this.state.trailerUrl === null || !this.state.trailerUrl.startsWith('https://www.youtube.com/')) {
                        this.setState({message: 'Trailer URL must be valid URL starts with https://www.youtube.com/'})
                        toast.error( 'Trailer URL must be valid URL starts with https://www.youtube.com/');
                        return;
                    }
                    await this.props.createMovie(this.state);
                    
                }}>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={this.handleChange} name="title" id="title" placeholder="Enter title here..."/>
        <label htmlFor="storyLine">Story Line</label>
        <input type="text" onChange={this.handleChange} name="storyLine" id="storyLine" placeholder="Enter story line here..."/>
        <label htmlFor="trailerUrl">Trailer Url</label>
        <input type="url" onChange={this.handleChange} name="trailerUrl" id="trailerUrl" placeholder="Trailer Valid YouTube URL here..."/>
        <label htmlFor="poster">Movie Poster</label>
        <input type="url" onChange={this.handleChange} name="poster" id="poster" placeholder="Poster URL here..."/>
        <input type="submit" value="Create"/>
      </form>
    </div>);

    return (
      <div className="Create">
        {(isAdmin === true) ? (renderIfAdmin) : (<Redirect to='/'/>)}
      </div>
    );
  }
}

export default Create;
