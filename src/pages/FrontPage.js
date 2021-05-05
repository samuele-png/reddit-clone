import { Link } from "react-router-dom";
import "../assets/App.css";
import PostList from "../components/postList/PostList";
import NewPostForm from "../parts/newPostForm/NewPostForm"
import { useSelector } from "react-redux";
import { selectPosts } from "../store/posts/selectors";
import { useDispatch } from "react-redux";

export default function FrontPage() { 
const posts = useSelector(selectPosts);
console.log(posts)
  return (
    <div>
          <NewPostForm/>
{posts && posts.map((e) => (<PostList key={e.postId} userId={e.userId} postId={e.postId} content={e.content} subId={e.subId}/>))}
  
   


   
    </div>
  );
}
