import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import './Home.css'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dinamicForm: null
    }
    this.setDinamicTrailer = this.setDinamicTrailer.bind(this);
    this.setDinamicStoryLine = this.setDinamicStoryLine.bind(this);
    this.convertEmbedTrailer = this.convertEmbedTrailer.bind(this);
  }
  

  convertEmbedTrailer(trailer) {
    let finalEmbed = '';
    let withEmbed = '';
    if(trailer.startsWith("http://www.youtube.com/watch?v=") || trailer.startsWith('https://www.youtube.com/watch?v=')) {

      withEmbed =  trailer
      .replace("http://www.youtube.com/watch?v=", "http://www.youtube.com/embed/")
      .replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
      .replace("https://www.youtube.com/watch", "https://www.youtube.com/embed/");

      console.log(withEmbed);
      finalEmbed =  withEmbed.replace(/&/g, "&amp;");
    } 
    return finalEmbed;
  }
  

  setDinamicTrailer(movie) {
    let embedtrailer = this.convertEmbedTrailer(movie.trailerUrl);
    toast.success(`Trailer for movie ${movie.title} loaded on top!`)
    this.setState({
      dinamicForm: (<span>
        <h2>Trailer of {movie.title}</h2>
        <div className="trailer" style={{width: 640+"px", height: 360+"px"}}>
            <div style={{width: 100+"%", height: 100+"%"}}>
                {<iframe frameBorder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube video player" width="100%" height="100%"  src={embedtrailer}  id="widget2">
                </iframe>}
                
            </div>
        </div>
    </span>)
    })
  }

  setDinamicStoryLine(movie) {
   toast.success(`Story Line for movie ${movie.title} loaded on top!`)
   this.setState({
     dinamicForm: (<span>
            <h2>Story line of {movie.title}</h2>
            <p>{movie.storyLine}</p>
        </span>)
   })
  }


  render() {
    let dinamicForm = this.state.dinamicForm;
    if(localStorage.getItem('userId') === null) {
      dinamicForm = null;
    }
    return (
      <Fragment>
      <div className="Home">
          <h1>All movies</h1>
            {dinamicForm}
          <ul className="movies">
            {this.props.movies.map(movie => (
            <li className="movie" key={movie._id}>
                <h2>{movie.title}</h2>
                <img src={movie.poster} alt={movie.title}/>

          {(this.props.userId !== null) ? (
            <span>
              <button onClick={(event) => {
                    event.preventDefault();
                    this.setDinamicTrailer(movie);
                    this.props.history.push("/");
                }}>View Trailer</button>
              <button onClick={(event) => {
                  event.preventDefault();
                  this.setDinamicStoryLine(movie);
                  this.props.history.push("/");
              }}>View Story Line</button>
            </span>
          ) : (null)}

              </li>
            ))}
          </ul>
      </div>
      </Fragment>
    );
  }
}

export default Home;
