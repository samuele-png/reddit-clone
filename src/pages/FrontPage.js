import { useParams } from "react-router-dom";
import "../assets/App.css";
import PostList from "../components/postList/PostList";
import NewPostForm from "../parts/newPostForm/NewPostForm";
import { useSelector } from "react-redux";
import { selectPosts } from "../store/posts/selectors";
import { useDispatch } from "react-redux";

export default function FrontPage() {
const sub = useParams();

const posts = useSelector(selectPosts);


const res = posts && posts.filter((e)=>e.subId === sub.subId )
console.log(posts,"myposts")
  return (
    <div>
      <NewPostForm />
      {res &&
        res.map((e) => (
          <PostList
            key={Math.random()}
            userId={e.userId}
            postId={e.postId}
            content={e.content}
            subId={e.subId}
          />
        ))}
    </div>
  );
}
