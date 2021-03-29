import StarRating from '../StarRating'
import './Movie.scss'

const DEFAULT_POSTER = 'https://via.placeholder.com/500x750/999999/FFFFFF/?text=Poster Not Available'

const PosterFrame = props => {
  return (
    <div className="poster-frame">
            <img src= {`${props.base_url}w500${props.poster_path}`} />
    </div>
  )
}

const PosterFrameNoImage = () => {
  return (
    <div className="poster-frame">
            <img src={DEFAULT_POSTER} alt="No Image Available"/>
    </div>
  )
}


const Movie = props => {
  const poster =
    props.poster === null ? <PosterFrameNoImage   /> : <PosterFrame base_url={props.base_url} poster_path={props.poster} />
  
  
    const extractYear = (str) => {
      let year = str.split('-')
      return year[0]
    } 
    let year = ''
    if (props.release_date) {
       year = extractYear(props.release_date)
    }
   

    const rating = props.rating*10

    return (
      <div className="Movie">
          {poster}
          <div className="movie-information">
            <h2>{props.title}</h2>
            <small>{year}</small>
            <p>{props.overview}</p>
            <StarRating rating={rating} total_reviews={props.total_reviews} />
            
          </div>
      </div>
    )
}

export default Movie
