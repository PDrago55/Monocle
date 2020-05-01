const initialState = {
  category: [],
  status: "idle",
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTICLES_BY_CATEGORIES":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_ARTICLES_BY_CATEGORIES":
      return {
        ...state,
        category: action.category,
        status: "idle",
      };
    case "RECEIVE_ARTICLES_BY_CATEGORIES_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
