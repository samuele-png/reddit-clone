import { combineReducers } from "redux";
import postReducer from "../store/posts/reducer";
import userReducer from "../store/users/userReducer";
const rootReducer = combineReducers({
  post: postReducer,
});
export default rootReducer;
