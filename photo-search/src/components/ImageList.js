import React, { Component } from "react";

class ImageList extends Component {
  render() {
    console.log(this.props.foundImages);
    const images = this.props.foundImages.map((img) => (
      <img key={img.id} src={img.urls.regular} alt={img.alt_description} />
    ));
    return <div> {images} </div>;
  }
}

export default ImageList;
