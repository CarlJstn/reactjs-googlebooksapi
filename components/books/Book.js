import React, { Component } from "react";

import "./Book.css";

class Book extends Component {
  render() {
    const book = this.props.book;
    // Initialized variables.
    let author = "No author found";
    let price = "Price not available";
    let link = "#";

    // Get the thumbnail of the book from the result from Main.
    // Use the result as props to get the data.
    // If there's no thumbnail I use a placeholder I got from the web.
    let thumbnail = (
      <img
        className="thumbnail"
        src="http://www.sclance.com/pngs/image-placeholder-png/image_placeholder_png_698120.png"
        alt={book.volumeInfo.title + "_thumbnail"}
      />
    );
    try {
      thumbnail = (
        <img
          className="thumbnail"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title + "_thumbnail"}
        />
      );

      // Get the first author
      author = book.volumeInfo.authors[0];
      // Concatenate the Currency code and the price.
      price =
        book.saleInfo.retailPrice.currencyCode +
        " " +
        book.saleInfo.retailPrice.amount;
      // Get the link if the book.
      link = book.volumeInfo.previewLink;
    } catch (error) {}

    let bookDetails = (
      <div className="book">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bookItem"
        >
          {thumbnail}
        </a>
        <b className="bookTitle">
          {book.volumeInfo.title.substr(0, 40) + "..."}
        </b>
        <p className="author">{author}</p>
        <p className="price">{price}</p>
      </div>
    );
    return <div className="books">{bookDetails}</div>;
  }
}

export default Book;
