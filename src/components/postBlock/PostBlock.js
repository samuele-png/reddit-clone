import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../assets/App.css";
export default function PostBlock(props) {
  console.log(props,"postblock")
  return (
    <div class="PostBlock">
      <li >
          <Link to={{pathname: `/r/${props.subId}/${props.postId}`, state: {props}}} >{props.postId}
    </Link>
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
      
    </div>
  );
}
