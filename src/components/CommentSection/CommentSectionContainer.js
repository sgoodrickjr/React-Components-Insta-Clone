// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  const [comments, setCommentState] = useState({comments});

  const allComments = () => {
    setCommentState(comments);
  };

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {CommentInput.map((comments) => {
        return <Comment commentText = {comments.text} />
      })}
    </div>
  );
};

export default CommentSection;
