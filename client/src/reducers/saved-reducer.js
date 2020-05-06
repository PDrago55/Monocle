const initialState = {
  saved: [],
  status: "idle",
};

export default function savedReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_SAVED_ARTICLE":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_SAVED_ARTICLE":
      newState.saved.push(action.saved);
      return newState;
    case "RECEIVE_SAVED_ARTICLE_ERROR":
      return {
        ...state,
        status: "error",
      };
    default:
      return state;
  }
}
