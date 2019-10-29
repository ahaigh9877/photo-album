import React from "react";
import { Link } from "react-router-dom";
import PhotoPage from "./PhotoPage";
import { connect } from "react-redux";
import { setPhotos, getPhotosByAlbum } from "../actions/photos";

class PhotoPageContainer extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.id;
    console.log(`Now fetch photos for albumId = ${albumId}`);
    this.props.getPhotosByAlbum(albumId);
  }

  render() {
    console.log("PhotoPageContainer props: ", this.props);
    if (!this.props.photos) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Link to="/">Go back to the index</Link>
          <PhotoPage photos={this.props.photos} />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  return {
    photos: reduxState.photos
  };
};

export default connect(
  mapStateToProps,
  { setPhotos, getPhotosByAlbum }
)(PhotoPageContainer);
