import { PostActionTypes } from "../types/posts.types";
import { combineReducers } from "redux";

// PIZZAS LIST REDUCER

const postsListReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case PostActionTypes.PIZZAS_LIST.REQUEST:
      return { loading: true };

    case PostActionTypes.PIZZAS_LIST.SUCCESS:
      return { loading: false, pizzas: action.payload };

    case PostActionTypes.PIZZAS_LIST.ERROR:
      return { loading: false, error: action.payload };

    case PostActionTypes.PIZZAS_LIST.RESET:
      return { pizzas: [] };

    default:
      return state;
  }
};

const postsReducers = combineReducers({
  list: postsListReducer
});

export default postsReducers;
