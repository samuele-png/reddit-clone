import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/App.css";
import SortBy from "../../components/sortBy/sortBy";
import NewPostForm from "../../parts/newPostForm/NewPostForm";
import PostBlock from "../../components/postBlock/PostBlock";
import {selectPosts} from "../../store/posts/selectors"
export default function PostList(props) {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  return (
    <div>
      <PostBlock
        userId={props.userId}
        content={props.content}
        subId={props.subId}
        postId={props.postId}
      />
    </div>
  );
}
