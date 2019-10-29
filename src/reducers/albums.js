// BRACES VERY IMPORTANT HERE, SOMETHING TO DO WITH NOT IMPORTING DEFAULT!!!!!
import { ADD_ALBUM, SET_ALBUMS } from "../actions/albums";

export default (state = [], action) => {
  console.log("Reducer, state, action", state, action);
  switch (action.type) {
    case ADD_ALBUM: {
      console.log("CASE: ADD_ALBUM");
      return [...state, { ...action.payload }];
    }
    case SET_ALBUMS: {
      console.log("CASE: SET_ALBUMS");
      // this is different from first case, because we're REPLACING what's in state, rather than adding to it, so no ...state required.
      return [...action.payload];
    }
    default: {
      console.log("DEFAULT");
      return state;
    }
  }
};
