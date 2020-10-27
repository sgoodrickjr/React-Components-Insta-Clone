// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";
import dummyData from "../../dummy-data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = props => {

  const [currentLikes, setCurrentLikes] = useState(0)

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper" 
        onClick={ () => {
          setCurrentLikes(currentLikes + 1);
        }}>
          <FontAwesomeIcon icon={faHeart}/>

            {props.map((likeData, id) => {
              return <LikeSection key={id} likes={likeData} />;
            })}

        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
          <p className="like-number">{props.postData.likes}likes</p>
    </div>
  )
};

export default LikeSection;
