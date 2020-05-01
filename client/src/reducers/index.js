import { combineReducers } from "redux";

import titles from "./title-reducer";
import article from "./article-reducer";
import category from "./category-reducer";
export default combineReducers({
  titles,
  article,
  category,
});
