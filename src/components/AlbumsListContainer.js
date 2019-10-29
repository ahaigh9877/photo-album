import React from "react";
import AlbumsList from "./AlbumsList";
import { connect } from "react-redux";
import { addAlbum } from "../actions/albums";
import { setAlbums } from "../actions/albums";

const sleep = time =>
  new Promise(resolve => {
    setTimeout(() => resolve(`I waited for ${time} ms`), time);
  });

class AlbumsListContainer extends React.Component {
  //state = {};

  componentDidMount() {
    // sleep(2000).then(message => this.props.addAlbum(1, message));

    // sleep(3000).then(message => this.props.addAlbum(2, message));

    // sleep(2000).then(message => {
    //   this.props.setAlbums([
    //     {
    //       id: 1,
    //       title: message
    //     },
    //     {
    //       id: 2,
    //       title: "This is the second album"
    //     },
    //     {
    //       id: 3,
    //       title: "The last album"
    //     }
    //   ]);
    // });

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => this.props.setAlbums(data));

    // console.log("AlbumsListContainer state just before dispatch: ", this.state);
    // console.log("AlbumsListContainer's props: ", this.props);

    // this.props.dispatch(this.props.addAlbum(5, "Enjoying Sunshine"));
    // this.props.dispatch(this.props.addAlbum(10, "Having fun in the US"));

    // Does this bit need to change? It seems to be defining ADD_ALBUM, which is defined in the action file.
    // this.props.dispatch({
    //   type: "ADD_ALBUM",
    //   payload: {
    //     id: 5,
    //     title: "Enjoying Sunshine"
    //   }
    // });
  }

  render() {
    console.log("AlbumsListContainer props in RENDER: ", this.props);
    if (!this.props.albums) {
      return <p>Loading...</p>;
    } else {
      return <AlbumsList albums={this.props.albums} />;
    }
  }
}

// Missing something here? addAlbum?
const mapStateToProps = reduxState => {
  console.log("Redux State", reduxState);
  return {
    // don't quite understand this line...
    albums: reduxState.albums
  };
};

// Should the thing below be included??
// setAlbums in braces is shorthand for a mapDispatchToProps() function, which has the effect of not having to use dispatch in componentDidMount() above.
export default connect(
  mapStateToProps,
  { setAlbums }
)(AlbumsListContainer);

// (null,
//     // name of the property we want to use, action creator as a value 2in1 object literal property value shorthand.
//     { addAlbum })
