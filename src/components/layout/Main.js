import React, { Component } from "react";
import ViewBooks from "../books/ViewBooks";
import Spinner from "../common/Spinner";
import Button from "./Button";

import "./Main.css";

class Navbar extends Component {
  state = {
    searchText: "",
    searchquery: "Harry Potter",
    resultIndex: 0,
    result: null
  };

  // Show "Harry Potter" as the first search.
  componentWillMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.searchquery
      }&startIndex=${this.state.resultIndex}&maxResults=40`
    )
      .then(response => response.json())
      .then(resData => {
        this.setState({ result: resData });
      });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Search button function, fetched the books according to the word typed in the search box.
  onSubmit = e => {
    if (this.state.searchText === "") {
      alert("Please type something.");
    } else {
      this.setState(
        { result: null, searchquery: this.state.searchText },
        // Callback function so it will change the state first before fetching again.
        () => {
          fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${
              this.state.searchquery
            }&startIndex=${this.state.resultIndex}&maxResults=40`
          )
            .then(response => response.json())
            .then(resData => {
              this.setState({ result: resData, resultIndex: 0 });
            });
        }
      );
    }
  };

  // Previous button function, fetched the next 40 books.
  onNext = e => {
    let index = this.state.resultIndex + 40;
    if (index > this.state.result.totalItems) {
      index = this.state.result.totalItems - 40;
    }
    try {
      this.setState({ resultIndex: index, result: null }, () =>
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.searchquery
          }&startIndex=${this.state.resultIndex}&maxResults=40`
        )
          .then(response => response.json())
          .then(resData => {
            this.setState({ result: resData });
          })
      );
    } catch (error) {}
  };

  // Previous button function, fetched the previous 40 books.
  onPrevious = e => {
    let index = this.state.resultIndex - 40;
    if (index < 0) {
      index = 0;
    }

    this.setState({ resultIndex: index, result: null }, () =>
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.searchquery
        }&startIndex=${this.state.resultIndex}&maxResults=40`
      )
        .then(response => response.json())
        .then(resData => {
          this.setState({ result: resData });
        })
    );
  };

  render() {
    let viewBooks;
    // Show spinner if data is still being fetched.
    let loading = <Spinner />;
    // Previous and Next button disbale property, set to disabled if data is being fecthed or there's no more books.
    let disbaleNext = true;
    let disablePrev = true;
    if (this.state.result !== null) {
      // Pass results as props to ViewBooks.
      viewBooks = <ViewBooks result={this.state.result} />;
      // Make loading gone as the results are fetched.
      loading = false;

      // Make the previous and next button clickable.
      disbaleNext = false;
      disablePrev = false;

      // If theres is no more books to be fetched, disable the next button.
      if (this.state.result.items.length < 40) {
        disbaleNext = true;
      }
    }

    return (
      <div className="main">
        <div className="navbar">
          <div className="search">
            <input
              className="searchbox"
              type="text"
              placeholder="Search books..."
              name="searchText"
              value={this.state.searchText}
              onChange={this.onChange}
            />
            <button className="searchbutton" onClick={this.onSubmit}>
              Search
            </button>
          </div>
        </div>
        {loading}
        <div className="mainBooks">{viewBooks}</div>
        <Button
          disablePrev={disablePrev}
          disbaleNext={disbaleNext}
          onPrevious={this.onPrevious}
          onNext={this.onNext}
        />
      </div>
    );
  }
}

export default Navbar;
