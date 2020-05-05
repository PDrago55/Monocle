const initialState = {
  user: {},
  isSignedIn: false,
  status: "idle",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_CURRENT_USER":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE_CURRENT_USER":
      return {
        ...state,
        user: action.user,
        isSignedIn: true,
        status: "idle",
      };
    case "RECEIVE_CURRENT_USER_ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
