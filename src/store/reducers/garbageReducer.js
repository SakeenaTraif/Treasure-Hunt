import * as types from "../actions/types";

const initialState = {
  garbages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GARBAGE:
      return {
        ...state,
        garbages: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
