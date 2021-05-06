import { NavLink } from "react-router-dom";
import "../../assets/App.css";
export default function ReplyBlock(props) {
  return <div className="ReplyBlock"> <div className="PostBlock">
  <li >
      
 </li>
  UserId:{props.userId}
  <br />
  Content:{props.content}
  <br />
  subreddit:{props.subId}
  <br />
  postId:{props.postId}
  <br />
  <br />
  
</div> </div>;
}
