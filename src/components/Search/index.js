import './Search.scss'

const Search = props => {


  const handleChange = (event) => {
    if(event.target.value !== undefined) {
      props.changeTerm(event.target.value)
    }
    
  }

  const handleSearch = (event) => {
    event.preventDefault()
    props.onSearch(props.term)
  }
  return (
    <form>
      <input type="text"
             placeholder="search..."
             onChange={handleChange}
             onKeyUp={handleSearch}
      />

    </form>
  )
}

export default Search
