import { Link } from "react-router-dom";
import "../assets/App.css";
import PostList from "../components/postList/PostList";
const data= [ 
  {
  userId: "username1  ",
  postId: "1",
  content: "Lorem Ipsum",
  subreddit: "testReddit"
},
 {
  userId: "username2",
  postId: "2",
  content: "Lorem Ipsum",
  subreddit: "testReddit"
},

{
  userId: "username3",
  postId: "3",
  content: "Lorem Ipsum",
  subreddit: "testReddit"
},

 {
  userId: "username4",
  postId: "4",
  content: "Lorem Ipsum",
  subreddit: "testReddit"
},

 {
  userId: "username5",
  postId: "5",
  content: "Lorem Ipsum",
  subreddit: "testReddit"
}]


export default function FrontPage() {
  return (
    <div>{data.map((e) => (<PostList key={e.postId} userId={e.userId} postId={e.postId} content={e.content} subreddit={e.subreddit}/>))}
  
   
    </div>
  );
}
