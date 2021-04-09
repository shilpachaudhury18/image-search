import "./App.css";
import React, { Component } from "react";
import FetchingApi from "./components/FetchingApi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchingApi />
      </div>
    );
  }
}

export default App;
