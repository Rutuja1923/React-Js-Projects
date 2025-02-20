import "./BookReview.css";
import PropTypes from "prop-types";

function BookReview({name, author, rating, review, imgSrc}) {
  return (
    <div className="book-review">
      <img
        src="https://veronicarothbooks.com/wp-content/uploads/2016/04/ctm-homepage-198x300.png"
        alt="book-cover-page"
        className="book-cover"
      />
      <div className="book-details">
        <h2>The Fates Divide</h2>
        <h3>By Veronica Roth</h3>
        <p className="rating">
          <span className="fa fa-star checked"></span> Rating : 4.5/5
        </p>
        <p className="review">
          <strong>Review :&nbsp;</strong>
          The Fates Divide by Veronica Roth is a gripping sequel to Carve the
          Mark, deepening the complexities of fate, power, and identity. With
          rich world-building and evolving character dynamics, the novel
          explores destiny&apos;s fluidity and the weight of choices. Though
          pacing issues arise at times, Roth delivers an emotionally charged
          narrative that keeps readers engaged till the end.
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
