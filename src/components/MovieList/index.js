import './MovieList.scss'

import Movie from '../Movie'


const MovieList = props => {
  const hasResults = props.movieList
  return (
    <div className="MovieList">
      {
        hasResults  ? props.movieList.map(movie => {
          return (
            <Movie key={movie.id}
                   title={movie.title}
                   base_url={props.configuration.images.secure_base_url}
                   poster={movie.poster_path}
                   release_date={movie.release_date}
                   overview={movie.overview}
                   rating={movie.vote_average}
                   total_reviews={movie.vote_count}
            />
          )
        }) : <p>No movies found</p>
      }
        
      </div>
  )
}

export default MovieList
