export const SET_PHOTOS = "SET_PHOTOS";

// no THUNK here yet...
export function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    payload: photos
  };
}

export function getPhotosByAlbum(albumId) {
  return function(dispatch) {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${encodeURI(
        albumId
      )}`
    )
      .then(res => res.json())
      .then(data => {
        dispatch(setPhotos(data));
      });
  };
}
