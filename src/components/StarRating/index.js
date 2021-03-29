import './StarRating.scss'


const StarRating = props => {
    const isSingular = props.total_reviews <= 1 ? 'review' : 'reviews'
    return (
      <div className="StarRating" title={`${props.rating}%`}>
        <div className="back-stars">
            <i className="fal fa-star" aria-hidden="true"></i>
            <i className="fal fa-star" aria-hidden="true"></i>
            <i className="fal fa-star" aria-hidden="true"></i>
            <i className="fal fa-star" aria-hidden="true"></i>
            <i className="fal fa-star" aria-hidden="true"></i>
            
            <div className="front-stars" style={{width: props.rating + '%'}}>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
            </div>
        </div>
        <small>{props.total_reviews} {isSingular}</small>
      </div> 
    )
}

export default StarRating
