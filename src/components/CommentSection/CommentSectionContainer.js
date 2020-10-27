// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import TimeStamp from "../PostsContainer/TimeStamp";
import DateConverter from "./DateConverter"

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments)
  const [timeSince, setTimeSince] = useState(DateConverter(props.time))
  const [newComment, setnewComment] = useState("")

  function submitComment(e){
    e.preventDefault();
    setComments(comments => [...comments, {
      username: "anonnymoose",
      text: newComment
    }])
    setnewComment("");
    
  }
  function changeComment(e){
    e.preventDefault();
    setnewComment(e.target.value)
  }

  return (
    <div role={props.postid}>
      {/* map through the comments data and return the Comment component */}
      {comments.map(comment =>{
        return <Comment comment={comment} />
      })}
      <TimeStamp time={timeSince} />
      <CommentInput comment={newComment} changeComment={changeComment} submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
