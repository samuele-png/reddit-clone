import { NavLink } from "react-router-dom";
import "../../assets/App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../store/posts/actions";
export default function NewPostForm() {


  const dispatch = useDispatch();
  const [postId, setPostId] = useState("");
  const [subId, setSubId] = useState("");
  const [content, setContent] = useState("");



  const submit = (event) => {
    event.preventDefault();

    dispatch(
      addPosts({
        subId,
        content,
        postId,
      })
    );

    setPostId("");
    setSubId("");
    setContent("");
  };

  return (
    <div>
       <form onSubmit={submit }>
        <h2>Add a new team!</h2>
        <p>
          <label>
            postId:{" "}
            <input
              type="text"
              value={postId}
              onChange={(e) => setPostId(e.target.value)}
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
        <p>
          <label>
            subId:{" "}
            <input
              type="text"
              value={subId}
              onChange={(e) => setSubId(e.target.value)}
            />
          </label>
        </p>
        <button type="submit">Add this team!</button>
        
      </form>

    
    </div>
  );
}
