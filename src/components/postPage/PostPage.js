import { useSelector } from "react-redux"
import "../../assets/App.css";
import NewCommentForm from "../../parts/newCommentForm/NewCommentForm"
import { selectComments } from "../../store/comments/selectors";
import CommentBlock from "../commentBlock/CommentBlock"
export default function PostPage(props) {

 const state = props.location.state.props
 const comments = useSelector(selectComments);

 const res = comments.filter(e => e.postId === state.postId)


console.log(res,"res")
  return (
    <div>
 <NewCommentForm/>

    {res &&
        res.map((e) => (
          <CommentBlock
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
