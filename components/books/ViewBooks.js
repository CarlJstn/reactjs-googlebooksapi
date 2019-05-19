import React, { Component } from "react";
import Book from "./Book";

class ViewBooks extends Component {
  render() {
    return this.props.result.items.map((item, index) => (
      <Book key={index} book={item} />
    ));
  }
}

export default ViewBooks;
