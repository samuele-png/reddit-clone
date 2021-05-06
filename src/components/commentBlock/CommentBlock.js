import { NavLink } from "react-router-dom";
import "../../assets/App.css";
export default function CommentBlock(props) {
  return (
    <div className="PostBlock">

      COMMENT BLOCK

      postId:{props.postId} content{props.content}
      <br />
      <br />
      
    </div>
  );
}