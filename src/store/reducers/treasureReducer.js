import * as types from "../actions/types";

const initialState = {
  treasures: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TREASURE:
      return {
        ...state,
        treasures: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
