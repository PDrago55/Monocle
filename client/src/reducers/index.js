import { combineReducers } from "redux";

import titles from "./title-reducer";
import article from "./article-reducer";
import category from "./category-reducer";
import user from "./user-reducer";
import saved from "./saved-reducer";
export default combineReducers({
  titles,
  article,
  category,
  user,
  saved,
});
