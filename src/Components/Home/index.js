import React, { Component } from 'react';
import Axios from 'axios';
import './index.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    this.fetchMovieList();
  }

  fetchMovieList = () => {
    const postData = {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting',
    };

    Axios.post('https://hoblist.com/api/movieList', postData)
      .then((response) => {
        console.log(response)
        this.setState({ movieList: response.data.result });
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };

  render() {
    const { movieList } = this.state;

    return (
      <div>
        <h2 className='heading'>Movie List</h2>
        <ul>
          {movieList.map((movie) => (
            <div className='item-container' key={movie.id}>
              <div className='container'>
                <div key={movie.id} className='list-container'>
                    <img src={movie.poster} alt='poster' className='image-size'/>
                <div className='details'>
                    <h1 className='name'>{movie.title}</h1>
                    <span className='genre'> Genre : {movie.genre} </span>
                    <span className='genre'> director : {movie.director} </span>
                    <span className='genre'>writers: {movie.writers}</span>
                    <span className='genre'> {movie.voting} </span>
                    <span className='genre'> {movie.stars} </span>
                    </div>
                </div>
                <button type="submit" className='button1 btn' >Watch Trailer</button>
            </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
