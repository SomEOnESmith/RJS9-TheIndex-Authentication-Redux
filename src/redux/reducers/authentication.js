import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const currentUser = action.payload;
      return currentUser;
    default:
      return state;
  }
};

export default reducer;
