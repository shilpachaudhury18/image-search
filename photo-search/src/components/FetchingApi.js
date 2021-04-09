import React, { Component } from "react";
// using axios for fetching data from API
import axios from "axios";
import PhotoSearch from "./PhotoSearch";
import ImageList from "./ImageList";

class FetchingApi extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID YNPKa9cFJVhpH5W5TrI35Vje8SJ-Gzugn5uYvU3J9V0`,
      },
    });

    // Getting response from the API
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">React Photo Search</h1>
          <PhotoSearch userSubmit={this.onSearchSubmit} />
          {/** Displaying the number of objects getting response */}
          <span>Found: {this.state.images.length} images</span>
          <ImageList foundImages={this.state.images} />
        </div>
      </div>
    );
  }
}

export default FetchingApi;
