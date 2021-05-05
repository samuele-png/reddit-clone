import { NavLink } from "react-router-dom";
import "../../assets/App.css";
export default function PostBlock(props) {
  return (
    <div class="PostBlock">
   UserId:{props.userId}<br />
      Content:{props.content}<br />
      subreddit:{props.subreddit}<br />
      postId:{props.postId}<br /><br />
    </div>
  );
}