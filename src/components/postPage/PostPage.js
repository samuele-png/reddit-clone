import { NavLink } from "react-router-dom";
import "../../assets/App.css";
import SortBy from "../../components/sortBy/sortBy";
import NewPostForm from "../../parts/newPostForm/NewPostForm";
import PostBlock from "../../components/postBlock/PostBlock";
import CommentBlock from "../commentBlock/CommentBlock"
import NewCommentForm from "../../parts/newCommentForm/NewCommentForm"
export default function PostPage(props) {
 const state = props.location.state.props
  
  return (
    <div>
 {state.userId} {state.subId} {state.content} {state.postId}
    </div>
  );
}
