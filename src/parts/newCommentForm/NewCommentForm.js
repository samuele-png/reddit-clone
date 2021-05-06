import { useParams } from "react-router-dom";
import "../../assets/App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../store/comments/actions";
export default function NewPostForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const [commentId, setCommentId] = useState("");
  const [content, setContent] = useState("");
  const postId = params.postId;
  const subId = params.subId;
  const submit = (event) => {
    event.preventDefault();

    dispatch(
      addComments({
        subId,
        content,
        postId,
        commentId,
      })
    );
    setCommentId("");
    setContent("");
  };

  console.log(subId, postId);
  return (
    <div>
      <form onSubmit={submit}>
        <h2>Add a new comment!</h2>
        <p>
          <label>
            commentId:{" "}
            <input
              type="text"
              value={commentId}
              onChange={(e) => setCommentId(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            content:{" "}
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
        </p>

        <button type="submit">Add this COMMENT!!</button>
      </form>
    </div>
  );
}
