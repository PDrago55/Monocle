const initalState = {
  link: [],
  status: "idle",
};

export default function linkArticleReducer(state = initalState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_LINK_CATEGORY_ARTICLE":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_LINK_CATEGORY_ARTICLE":
      newState.link.push(action.link);
      return newState;
    case "RECEIVE_LINK_CATEGORY_ARTICLE_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
