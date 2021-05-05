import { NavLink } from "react-router-dom";
import "../../assets/App.css";
import SortBy from "../../components/sortBy/sortBy";
import NewPostForm from "../../parts/newPostForm/NewPostForm";
import PostBlock from "../../components/postBlock/PostBlock";
export default function PostList(props) {
  return (
    <div><PostBlock
      userId={props.userId}
      content={props.content}
      subreddit={props.subreddit}
      postId={props.postId}
      />
    </div>
  );
}
