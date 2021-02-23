import instance from "./instance";
import * as types from "../actions/types";

export const fetchGarbages = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/garbages");
      dispatch({
        type: types.FETCH_GARBAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
