import * as types from "../actions/types";

const initialState = {
  randoms:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RANDOM:
      return{
      ...state,
      randoms: action.payload.randoms,
      };

    default:
      return state;
  }
};

export default reducer;