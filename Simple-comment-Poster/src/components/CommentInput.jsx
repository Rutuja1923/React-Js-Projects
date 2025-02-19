import PropTypes from "prop-types";
import { useState } from "react";

function CommentInput({ onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Type a comment..."
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CommentInput

CommentInput.propTypes ={
  onAddComment: PropTypes.func.isRequired,
}


