import "./BookReview.css";
import PropTypes from "prop-types";
import { useState } from "react";

function BookReview({ name, author, rating, review, imgSrc }) {
  const [reviewText, setReviewText] = useState(review);
  const [eidtReviewText, setEditReviewText] = useState(false);

  const handleOnClick = () => {
    alert(`Edit Review Text ?\n${review}`);
    setEditReviewText(true);
  };

  const handleOnSave = () => {
    setEditReviewText(false);
  };

  const handleChange = (e) => {
    setReviewText(e.target.value);
  };

  return (
    <div className="book-review">
      <img src={imgSrc} alt={`${name}-cover`} className="book-cover" />
      <div className="book-details">
        <h2>{name}</h2>
        <h3>By {author}</h3>
        <p className="rating">
          <span className="fa fa-star checked"></span> Rating : {rating}/5
        </p>

        {eidtReviewText ? (
          <input type="text" value={reviewText} onChange={handleChange} />
        ) : (
          <p className="review">
            <strong>Review :&nbsp;</strong>
            {reviewText}
          </p>
        )}

        {eidtReviewText ? (
          <button onClick={handleOnSave}>Save</button>
        ) : (
          <button onClick={handleOnClick}>Edit Review</button>
        )}
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
};
