import React from "react";

export default function PhotoPage(props) {
  return (
    <div>
      <h1>Photos in this album</h1>
      {props.photos.map(photo => (
        <div>
          <p key={photo.id}>{photo.title}</p>
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}
