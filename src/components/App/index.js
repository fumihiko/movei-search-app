import React, { useState } from 'react'
import './App.scss'

import Header from '../Header'
import Search from '../Search'
import LoadMore from '../LoadMore'
import SearchResults from '../SearchResults'
import THEMOVIEDB from '../../util/THEMOVIEDB'


const App = () => {

  const [searchResults, setSearchResults] = useState([])
  const [movieList, setMovieList] = useState([])
  const [configuration, setConfiguration] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [moreLoading, setMoreLoading] = useState(false)

  const search = (term, page=1) => {
    THEMOVIEDB.configure().then(configuration => {
      setConfiguration(configuration)
      console.log(configuration)
    })
    setLoading(true)
    THEMOVIEDB.search(term, page=1).then(searchResults => {
      
      setSearchResults(searchResults)
      setCurrentPage(searchResults.page)
      setTotalPages(searchResults.total_pages)
      setMovieList(searchResults.results)
      setLoading(false)
      console.log(searchResults)
    })
  }

  const changeTerm = (term) => {
    setTerm(term)
  }

  const loadMore = (term, page) => {
    setMoreLoading(true)
    THEMOVIEDB.search(term, page).then(searchResults => {
      
      setCurrentPage(searchResults.page)
      let nextMovieList = searchResults.results
      let newMovieList = [...movieList, ...nextMovieList]
      setMovieList(newMovieList)
      setMoreLoading(false)
     console.log(searchResults)
    })
  }

  const showLoadMore = movieList === undefined || totalPages === 0 || totalPages   === currentPage  ?  <></> : <LoadMore term={term} currentPage={currentPage} loadMore={loadMore} />

  
 

  return (
    <div className="App">
      <Header text="Movie Search App" />
      <Search  onSearch={search} term={term} changeTerm={changeTerm} />
      {loading ? (
        <div className="fa-3x">
          <i className="fas fa-spinner fa-pulse"></i> 
        </div>
      ) : (
        <SearchResults searchResults={searchResults}
                       movieList={movieList}
                       configuration={configuration} 
        />
      )}

      {moreLoading ? (
              <div className="fa-3x">
                <i className="fas fa-spinner fa-pulse"></i> 
              </div>
            ) : (
              showLoadMore
            )}
      
      
    </div>
  )
}

export default App