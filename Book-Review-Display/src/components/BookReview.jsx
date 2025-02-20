import "./BookReview.css";
import PropTypes from "prop-types";

function BookReview({name, author, rating, review, imgSrc}) {
  return (
    <div className="book-review">
      <img
        src={imgSrc}
        alt={`${name}-cover`}
        className="book-cover"
      />
      <div className="book-details">
        <h2>{name}</h2>
        <h3>By {author}</h3>
        <p className="rating">
          <span className="fa fa-star checked"></span> Rating : {rating}/5
        </p>
        <p className="review">
          <strong>Review :&nbsp;</strong>
          {review}
        </p>
      </div>
    </div>
  );
}

export default BookReview;

BookReview.propTypes = {
    name: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired, 
    review: PropTypes.string.isRequired, 
    imgSrc: PropTypes.string.isRequired,
}
