import instance from "./instance";
import * as types from "../actions/types";

export const fetchTreasures = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/treasures");
      dispatch({
        type: types.FETCH_TREASURE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
