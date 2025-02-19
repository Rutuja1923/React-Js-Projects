import { useState } from "react";
import CommentInput from "./CommentInput";
import CommentsList from "./CommentsList";

function CommentApp() {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
    }
  };
  return (
    <div>
      <h1>Simple Comment Poster</h1>
      <CommentInput onAddComment={addComment} />
      <CommentsList comments={comments} />
    </div>
  );
}

export default CommentApp;
