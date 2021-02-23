import instance from "./instance";

// TYPES
import  {FETCH_RANDOM} from  "./types";

// ACTIONS
export const fetchRandoms = () =>{
  return async (dispatch) =>{
    try {
      const response = await instance.get("/randoms");
      dispatch({
        type:FETCH_RANDOM,
        payload:{randoms: response.data},
      });
    } catch (error) {
      console.log(error);
    }
  };
};