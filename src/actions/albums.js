// These are all ACTION CREATORS.

export const ADD_ALBUM = "ADD_ALBUM";
export const SET_ALBUMS = "SET_ALBUMS";

export function addAlbum(id, title) {
  console.log("addAlbum id title", id, title);
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  };
}

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums
  };
}

// Here we want a dispatcher function in this action creator. We need THUNK.
// This is middleware: functions that live between dispatched actions and the reducers.

export function getAlbums() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        // we need some dispatcher function!
        dispatch(setAlbums(data));
      });
  };
}
