import React from "react";

export default function AlbumsList(props) {
  return (
    <div>
      <h1>All Albums</h1>
      <p>There are {props.albums.length} albums available.</p>
      <ul>
        {props.albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
