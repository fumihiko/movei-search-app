const API_KEY_V3 = 'd7a3a18bf1f75a32e20a4c21012ba47b'
const API_KEY_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2EzYTE4YmYxZjc1YTMyZTIwYTRjMjEwMTJi YTQ3YiIsInN1YiI6IjVjM2Q1OTQzMGUwYTI2NzY1MzhlNjA0MCIsInNjb3BlcyI6WyJhc GlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yw1N5DkpZF-1H8mHRoEZ7bVCBJhDE6qsStaul8d KZhM'


const THEMOVIEDB = {

  configure() {
    return fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY_V3}`)
    .then(response => {
      return response.json()
    }).then(jsonResponse => {
      return jsonResponse
    })

    
  },

  search(term, page=1) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_V3}&language=en-US&query=${term}&include_adult=false&page=${page}`)
    .then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (!jsonResponse.results) {
        return []
      }
      return jsonResponse
    })

    }
    

}

export default THEMOVIEDB
