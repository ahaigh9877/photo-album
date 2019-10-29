import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AlbumsListContainer from "./components/AlbumsListContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AlbumsListContainer />
      </div>
    </Provider>
  );
}

export default App;
