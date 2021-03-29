import './LoadMore.scss'

const LoadMore = props => {

  const handelClick = (event) => {
    console.log('clicked!')
    console.log(`Termn: ${props.term} CurrentPage: ${props.currentPage}`)
    props.loadMore(props.term, props.currentPage +1)
  }

  return (
    <button className="LoadMore" type="button" onClick={handelClick}>
      Load More
    </button>
  )
}
export default LoadMore
