//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data 

const PostsPage = props => {
  // set up state for your data

  const [posts, setPosts] = useState()

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map((newPostArray, id) => {
        return <Post key={id} postData={newPostArray}/>
      })}
    </div>
  );
};

export default PostsPage;
