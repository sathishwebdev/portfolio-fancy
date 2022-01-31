import { combineReducers } from "redux";

// Reducers
import postsReducers from "./reducers/posts.reducers";


export default combineReducers({
  posts: postsReducers
});
