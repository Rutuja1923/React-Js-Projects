import PropTypes from "prop-types";

function CommentsList({ comments }) {
  return (
    <div className="listContainer">
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="comment">{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
