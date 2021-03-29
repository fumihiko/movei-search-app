import MovieList from '../MovieList'

const SearchResults = props => {
  return (
    <div className="SearchResults">
        <MovieList movieList={props.movieList} 
                   configuration={props.configuration} />
      </div>
  )
}

export default SearchResults
