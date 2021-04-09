import React, { Component } from "react";

class PhotoSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onSearchClick = (event) => {
    event.preventDefault();
    console.log(this.state.value);
    this.props.userSubmit(this.state.value);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSearchClick}>
          <input
            type="search"
            placeholder="Search Here"
            value={this.state.value}
            onChange={this.onInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </React.Fragment>
    );
  }
}

export default PhotoSearch;
