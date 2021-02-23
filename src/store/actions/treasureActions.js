import instance from "./instance";

// TYPES
import  {FETCH_TREASURE} from  "./types";

// ACTIONS
export const fetchTreasures = () =>{
  return async (dispatch) =>{
    try {
      const response = await instance.get("/treasures");
      dispatch({
        type:FETCH_TREASURE,
        payload:{treasures: response.data},
      });
    } catch (error) {
      console.log(error);
    }
  };
};