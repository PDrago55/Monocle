const initialState = {
  article: [],
  status: "idle",
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTICLE":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_ARTICLE":
      return {
        ...state,
        article: action.article,
        status: "idle",
      };
    case "RECEIVE_ARTICLE_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
