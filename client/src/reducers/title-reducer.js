const initialState = {
  titles: [],
  status: "idle",
};

export default function titleReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_TITLES":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_TITLES":
      return {
        ...state,
        titles: action.titles,
        status: "idle",
      };
    case "RECEIVE_TITLES_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
